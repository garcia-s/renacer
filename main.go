package main

import (
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
	"log"
	"net/http"
	"os"
	"path/filepath"
)

func main() {
	router := chi.NewRouter()
	router.Use(cors.Handler(cors.Options{
		//FIXME: ADD CORSE CONSTRAINTS on prod
		AllowedMethods: []string{"*"},
	}))

	router.Use(middleware.Logger)
	router.Get("/api", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Add("Content-type", "application/json")
		w.Write([]byte("{\"hello\", \"world\"}"))
	})

	wd, err := os.Getwd()
	if err != nil {
		log.Fatalf("Couldn't get the current working directory %s", err)
	}

	dirs := []string{
		"/web/assets",
		"/web/pages",
	}

	router.Get("/*", func(w http.ResponseWriter, r *http.Request) {

		if r.RequestURI == "/" {
			http.ServeFile(w, r, filepath.Join(wd, "/web/pages/index.html"))
			return
		}

		for i := 0; i < len(dirs); i++ {
			file := filepath.Join(wd, dirs[i], r.RequestURI)
			if _, err := os.Stat(file); err == nil {
				http.ServeFile(w, r, file)
				return
			}

			http.ServeFile(
				w,
				r,
				filepath.Join(wd, "/web/pages/404.html"),
			)
			return
		}
	})

	http.ListenAndServe(":4000", router)
}



class Emitter {
    /**
    *Mapa de los listeners del emisor de eventos
    *@private {Map<string, Listener[]>} listeners
    **/
    listeners = {}

    /**
    *Agrega una funcion para escuchar un evento en el emisor de eventos
    *@param {string} eventName - Nombre del evento
    *@param {(data: any) => void} listener - Funcion que se ejecuta al emitirse el evento
    **/
    addEventListener(eventName, listener) {
        if (!this.listeners[eventName])
            return this.listeners[eventName].push(listener)

        this.listeners = [listener]
    }

    /**
    *@param {string} eventName - Nombre del evento
    *@param {(data: any) => void} listener - Funcion que se ejecuta al emitirse el evento
    **/
    removeEventListener(eventName, listener) {
        if (!this.listeners[eventName])
            return

        this.listeners[eventName].find((listen) =>
            listen == listener
        )
    }

    /**
    *Emite un evento y llama los listeners para ese evento
    *@param {string} eventName - Nombre del evento 
    *@param {any}  data - Data a entregarle al evento  
    **/
    emit(eventName, data) {
        if (!this.listeners[eventName])
            return

        for (let i = 0; i < this.listeners[eventName].length; i++) {
            this.listeners[eventName][i](data)
        }
    }
}

const emitter = new Emitter()
export default emitter;

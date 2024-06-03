import configs from "../database/config.js"


export default async function Home() {
    try {
        const config = await configs.getAll();
        console.log(config)
        return (
            <main>
                {
                    config.map((e) => <div>
                        {e.name} - 
                        {e.value}
                    </div>)
                }
            </main>
        );
    } catch (e) {
        return <div NO Se pudo traer la config</div>
    }
}



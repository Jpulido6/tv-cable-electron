import { Button } from "@nextui-org/react"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                <h2 className="text-3xl font-semibold text-gray-700 mb-4">Página no encontrada</h2>
                <p className="text-xl text-gray-600 mb-8">Lo sentimos, no pudimos encontrar la página que estás buscando.</p>
                <Button className="px-6 py-3 w-full mt-8 bg-foreground text-background transition-colors">
                    <Link to="/" >
                        Volver al inicio
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default NotFoundPage

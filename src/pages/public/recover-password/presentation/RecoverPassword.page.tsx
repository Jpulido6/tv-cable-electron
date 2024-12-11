import { Button, Card, CardBody, CardFooter, CardHeader, Input } from "@nextui-org/react"


const RecoverPasswordPage = () => {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <span>Recuperar Contraseña</span>
                <span>Ingresa tu correo electrónico para recuperar tu contraseña.</span>
            </CardHeader>
            <CardBody>
                <form >
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Input
                                type="email"
                                label="Email"
                                placeholder="you@example.com"
                                labelPlacement="outside"
                                startContent={
                                    <i className="pi pi-at" />
                                }
                            />
                        </div>
                    </div>
                </form>
            </CardBody>
            <CardFooter>
                <Button className="w-full mt-8 bg-foreground text-background">
                    Recuperar Contraseña
                </Button>

            </CardFooter>
        </Card>
    )
}

export default RecoverPasswordPage

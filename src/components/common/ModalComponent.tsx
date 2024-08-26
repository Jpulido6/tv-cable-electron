import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'
import { Toaster } from 'sonner'

export enum Size {
  ExtraSmall = "xs",
  Small = "sm",
  Medium = "md",
  Large = "lg",
  ExtraLarge = "xl",
  DoubleExtraLarge = "2xl",
  TripleExtraLarge = "3xl",
  QuadrupleExtraLarge = "4xl",
  QuintupleExtraLarge = "5xl",
  Full = "full"
}
interface Props {
  title: string,
  btnText: string,
  isOpen: boolean,
  onOpenChange: (isOpen: boolean) => void,
  btnFn?: () => void,
  children: React.ReactNode,
  size?: Size
}
export const ModalComponent: React.FC<Props> = ({
  isOpen,
  onOpenChange,
  children,
  title,
  btnText,
  btnFn,
  size = Size.Medium
}) => {

  return (
    <>
    <Toaster/>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="lg"
        size={size}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          }
        }}

      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"> {title}</ModalHeader>
              <ModalBody>
                {children}

              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button type='submit' className="bg-foreground text-background" onPress={btnFn}>
                  {btnText}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

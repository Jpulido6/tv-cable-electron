import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'


interface Props {
  title: string,
  btnText: string,
  isOpen: boolean,
  onOpenChange: (isOpen: boolean) => void,
  btnFn?: () => void,
  children: React.ReactNode
}
export const ModalComponent: React.FC<Props> = ({ 
  isOpen, 
  onOpenChange, 
  children, 
  title, 
  btnText, 
  btnFn }) => {

  return (
    <Modal
      backdrop="opaque"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      radius="lg"
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
              { children }

            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
              <Button className="bg-foreground text-background" onPress={btnFn}>
                {btnText}	
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

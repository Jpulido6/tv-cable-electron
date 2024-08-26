import MotionNumber from 'motion-number';
import React from 'react'

interface Props {
    title: string;
    subtitle: number;
    icon: string;

}

export const GridCard: React.FC<Props> = ({ title, subtitle, icon, }) => {
    return (
        <div className="rounded-lg border text-card-foreground shadow-sm">
            <div className="p-4 flex items-center justify-between gap-2" >
                <i className={`pi pi-${icon} text-5xl `}></i>
                <div>
                    <h3 className="text-2xl font-poppins-bold ">{title}</h3>

                    <div>

                        <p className="text-xl text-gray-500 font-poppins">
                            {
                                subtitle < 2000
                                    ? <MotionNumber
                                        value={subtitle}
                                        format={{
                                            notation: 'standard',
                                        }}
                                        locales="es-CO"
                                    />
                                    : <MotionNumber
                                        value={subtitle}
                                        format={{
                                            notation: 'standard',
                                            currency: 'COP',
                                            style: 'currency',
                                            maximumSignificantDigits: 3
                                        }}
                                        locales="es-CO"
                                    />
                            }

                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
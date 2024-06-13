import React from 'react'

interface Props {
    title: string;
    subtitle: string;
    icon: string;
    color?: string;
}

export const GridCard: React.FC<Props> = ({ title, subtitle, icon, color='black' }) => {
    return (
        <div className={` bg-${color}-300 rounded-lg border text-card-foreground shadow-sm `}>
            <div className="p-4 flex items-center justify-between gap-2" >                
                <i className={`pi pi-${icon} text-5xl text-${color}-700`}></i>
                <div>
                    <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">{title}</h3>
                    <p className={`text-3xl font-bold text-${color}-700`}>{subtitle}</p>
                </div>
            </div>
        </div>
    )
}
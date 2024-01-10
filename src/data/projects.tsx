export type Project = {
    name: string
    inDevelopment: boolean
    introduction: string
    details?: string
    photo: string
}
export const projects: Project[] = [
    {
        name: "SaaS for pizzerias",
        inDevelopment: false,
        introduction: `This SaaS for pizzerias was started in July 2023, it was firstly just for a pizzeria called Da Adamo.
        Now, many restaurants are waiting a first version of my software.
        
        Why are they interested ?
        
        Because it will be cheap (€900 / year for maintenance and updates), and it will be customizable as they want.`,
        photo: "https://dam.malt.com/da6bb66f-5a90-4ee2-a1ed-0908a3e7da29"
    }
]

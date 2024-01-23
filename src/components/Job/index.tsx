import {IJob} from "@/data";
import {DescriptionCard} from "@/components/Container";

export const Job = ({ job }: { job: IJob }) => {
    return (
        <DescriptionCard title={job.company} image={job.image} description={job.description} />
    )
}
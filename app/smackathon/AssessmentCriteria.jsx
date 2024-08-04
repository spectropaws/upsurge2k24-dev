import dynamic from "next/dynamic";

const AssessmentCriteriaMobile = dynamic(() => import('./components/AssessmentCriteriaMobile'), {ssr: false})
const AssessmentCriteriaDesktop = dynamic(() => import('./components/AssessmentCriteriaDesktop'), {ssr: false})

export default function AssesmentCriteria(){
    return(
        <>
        <div className="w-full hidden md:block">
            <AssessmentCriteriaDesktop></AssessmentCriteriaDesktop>
        </div>
        <div className="w-full block md:hidden">
            <AssessmentCriteriaMobile></AssessmentCriteriaMobile>
        </div>
        </>
    )
}
import AssessmentCriteriaMobile from "./components/AssessmentCriteriaMobile";
import AssessmentCriteriaDesktop from "./components/AssessmentCriteriaDesktop";

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
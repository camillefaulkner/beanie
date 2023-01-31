export const BeanieCalculator = () => {
    const today = new Date()
    const beanieDay = new Date("12/16/2022")

    let timeWithColdHead = today.getTime() - beanieDay.getTime();
    let daysWithColdHead = timeWithColdHead / (1000 * 3600 * 24)

    return <div className="beanieCalc">{parseInt(daysWithColdHead)}</div>
}
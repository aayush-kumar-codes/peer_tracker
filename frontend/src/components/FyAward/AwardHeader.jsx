import newMountlogo from "../../assets/NewmontLogo.png"

const AwardHeader = ({ year }) => {
    return (
        <div className="flex justify-between">
            {year && year?.List.map((ele, i) => {
                return (
                    <div key={i}>
                        <p className="text-3xl">{ele.AwardName}</p>
                        <p className="text-3xl">Calculations as of {ele.DisplayDateString}</p>
                    </div>
                )
            })
            }
            {/* <div>
                <img src={newMountlogo} alt="newMountlogo" />
            </div> */}
        </div >
    )
}

export default AwardHeader

import './styles/lastreports.css'
export default function LastReports () {

    const last = [];

    return (

        <>
        
            <div className='__cmp_lastrpts'>

                {last.length > 0 ? (
                    <div></div>
                ) : (
                    <div className='__cmp_lastrpts_empty'>No tienes citaciones recientes.</div>
                )}

            </div>


        </>

    )

}
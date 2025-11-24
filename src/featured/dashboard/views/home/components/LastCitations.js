import './styles/lastcitations.css'
export default function LastCitations () {

    const last = [];

    return (

        <>
        
            <div className='__cmp_lastctns'>

                {last.length > 0 ? (
                    <div></div>
                ) : (
                    <div className='__cmp_lastctns_empty'>No tienes citaciones recientes.</div>
                )}

            </div>

        </>

    )

}
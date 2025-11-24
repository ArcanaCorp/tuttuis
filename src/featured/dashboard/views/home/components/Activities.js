import './styles/actvities.css'
export default function Activities () {

    const activites = [];

    return (

        <>
        
            <div className='__cmp_activites'>
                {activites.length > 0 ? (
                    <div></div>
                ) : (
                    <div className='__cmp_activites_empty'>
                        <p>No tienes actividades cercanas</p>
                    </div>
                )}
            </div>

        </>

    )

}
export default function InstitutionForm ({ user, school }) {

    console.log(user);
    console.log(school);

    return (

        <>
        
            <h3 className="text-2xl mb4">Cuenta de Institución</h3>

            <div className="w-full flex flex-col gap-2 align-center justify-center text-center mb4">
                <div className="w h m-auto rounded-full bg-surface border-surface hidden" style={{"--w": "180px", "--h": "180px"}}>
                    <img src={school?.logo_url} alt={`Institución Educativa ${school?.name}`} className="w-full h-full" />
                </div>
                <input type="file" name="logoImg" id="logoImg" accept="image/*" hidden />
                <label className="block bg-surface pointer ph4 pv3 rounded-full" htmlFor="logoImg">Cambiar foto</label>
            </div>

            <ul className="w-full flex flex-col gap-2">
                <li className="w-full h flex align-center justify-between" style={{"--h": "50px"}}>
                    <span className="text-md">Nombre de la institución</span>
                    <span>{school?.name}</span>
                </li>
                <li className="w-full h flex align-center justify-between" style={{"--h": "50px"}}>
                    <span className="text-md">Inicio de Clases</span>
                    <div>
                        <input type="time" />
                    </div>
                </li>
                <li className="w-full h flex align-center justify-between" style={{"--h": "50px"}}>
                    <span className="text-md">Tolerancia</span>
                    <div>
                        <input type="time" />
                    </div>
                </li>
                <li className="w-full h flex align-center justify-between" style={{"--h": "50px"}}>
                    <span className="text-md">Tardanza</span>
                    <div>
                        <input type="time" />
                    </div>
                </li>
            </ul>

        </>

    )

}
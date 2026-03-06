'use client';

import { IconCheck, IconPencil, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function AccountForm ({ user }) {
    
    const [ account, setAccount ] = useState({
        full_name: '',
        email: '',
        phone: ''
    })
    const [editingField, setEditingField] = useState(null);
    const [originalValue, setOriginalValue] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccount(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const toggleEdit = (field) => {
        if (editingField !== field) {
            startEdit(field);
        } else if (isDirty(field)) {
            setEditingField(null);
            setOriginalValue('');
        } else {
            cancelEdit();
        }
    }
    const startEdit = (field) => {
        setOriginalValue(account[field]);
        setEditingField(field);
    };
    const cancelEdit = () => {
        setAccount(prev => ({
            ...prev,
            [editingField]: originalValue
        }));
        setEditingField(null);
        setOriginalValue('');
    };
    const isDirty = (field) => editingField === field && account[field] !== originalValue;

    useEffect(() => {
        if (!user) return;
        setAccount({
            full_name: user.full_name ?? '',
            email: user.email ?? '',
            phone: user.phone ?? ''
        });
    }, [user])

    return (
        
        <>
            <h3 className="text-2xl mb4">Administrar Cuenta</h3>
            <ul className="w-full flex flex-col gap-2">
                <li className="w-full h flex align-center justify-between" style={{"--h": "50px"}}>
                    <span className="text-md">Actualizar nombre</span>
                    <div className={`flex gap-0 align-center ${editingField === 'full_name' ? 'bg-surface' : 'bg-transparent'}`}>
                        <input type="text" className="h ph2 bg-transparent" style={{"--h": "40px"}} name="full_name" id="full_name" value={account?.full_name ?? ''} placeholder={account?.full_name || "Ingresa un nuevo nombre"} aria-placeholder={account?.full_name || "Ingresa un nuevo nombre"} onChange={(e) => handleChange(e)} readOnly={editingField !== 'full_name'} />
                        <button className="center w h" style={{"--w": "40px", "--mnw": "40px", "--h": "40px"}} onClick={() => toggleEdit('full_name')}>
                            {editingField !== 'full_name' && <IconPencil />}
                            {editingField === 'full_name' && !isDirty('full_name') && <IconX />}
                            {editingField === 'full_name' && isDirty('full_name') && <IconCheck />}
                        </button>
                    </div>
                </li>
                <li className="w-full h flex align-center justify-between" style={{"--h": "50px"}}>
                    <span className="text-md">Actualizar correo electrónico</span>
                    <div className={`flex gap-0 align-center ${editingField === 'email' ? 'bg-surface' : 'bg-transparent'}`}>
                        <input type="email" className="h ph2 bg-transparent" style={{"--h": "40px"}} name="email" id="email" value={account?.email ?? ''} placeholder={account?.email || "Actualizar correo electrónico"} aria-placeholder={account?.email || "Actualizar correo electrónico"} onChange={(e) => handleChange(e)} readOnly={editingField !== 'email'} />
                        <button className="center w h" style={{"--w": "40px", "--mnw": "40px", "--h": "40px"}} onClick={() => toggleEdit('email')}>
                            {editingField !== 'email' && <IconPencil />}
                            {editingField === 'email' && !isDirty('email') && <IconX />}
                            {editingField === 'email' && isDirty('email') && <IconCheck />}
                        </button>
                    </div>
                </li>
                <li className="w-full h flex align-center justify-between" style={{"--h": "50px"}}>
                    <span className="text-md">Actualizar número telefónico</span>
                    <div className={`flex gap-0 align-center ${editingField === 'phone' ? 'bg-surface' : 'bg-transparent'}`}>
                        <input type="text" inputMode="numeric" className="h ph2 bg-transparent" style={{"--h": "40px"}} name="phone" id="phone" value={account?.phone ?? ''} placeholder={account?.phone || "Actualizar número telefón"} aria-placeholder={account?.phone || "Actualizar número telefón"} onChange={(e) => handleChange(e)} readOnly={editingField !== 'phone'} />
                        <button className="center w h" style={{"--w": "40px", "--mnw": "40px", "--h": "40px"}} onClick={() => toggleEdit('phone')}>
                            {editingField !== 'phone' && <IconPencil />}
                            {editingField === 'phone' && !isDirty('phone') && <IconX />}
                            {editingField === 'phone' && isDirty('phone') && <IconCheck />}
                        </button>
                    </div>
                </li>
                <hr/>
                <li className="w-full h flex align-center justify-between" style={{"--h": "50px"}}>
                    <span className="text-md">Eliminar cuenta</span>
                    <button className="text-danger fw-semibold pv2 ph3">Eliminar</button>
                </li>
            </ul>
        </>

    )

}
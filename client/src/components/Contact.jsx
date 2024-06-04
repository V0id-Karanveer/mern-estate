import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact({listing}) {
    const [landlord, setLandlord] = useState(null);
    const [message, setMessage] = useState('');
    const onChange = (e) => {
        setMessage(e.target.value);
    };
    useEffect(() => {
        const fetchLandlord = async () => {
            try {
                const res = await fetch(`/api/user/${listing.userRef}`);
                const data = await res.json();
                setLandlord(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchLandlord();
    }, [listing.useRef]);
  return (
    <>
    {landlord && (
        <div className='flex flex-col gap-2'>
            <p >Contact <span className='font-semibold uppercase'>{landlord.username} </span> <span>at</span>  <span className='font-semibold'> {landlord.email}</span> for <span>{listing.name}</span></p>
            <textarea className='w-full border p-3 rounded-lg' name="message" id="message" rows="2" value={message} onChange={onChange} placeholder='Enter you message'></textarea>
            <Link className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95' to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}>Send Email</Link>
            <p className='text-slate-500 text-sm italic'>* Email functionality might not work in some browsers</p>
        </div>
    )}
    </>
  )
}

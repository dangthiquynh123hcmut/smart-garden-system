import { NavLink } from 'react-router-dom';
import './Pump.css';
import pump from '../../assets/image15.png';
import schedule from '../../assets/image16.png';
import { useEffect, useState } from 'react';
import { controlPump, getStatusPump } from '../../services/Api';

export default function Pump() {
    const [isOn, setIsOn] = useState(false);
    const [changePump, setChangePump] = useState(false)
    useEffect(() => {
        const fetchStatusPump = async () => {
            const res = await getStatusPump()
            console.log(res.data)
            setIsOn(res.data[0].value)
        }
        fetchStatusPump();
    }, [changePump])
    // const handleChangePump = async () => {
    //     setChangePump(!isOn)
    //     const result = await controlPump(changePump)
    //     console.log(result)
    // }

    return (
        <div className='pump'>
            <div className='pump-control'>
                <img src={pump} alt="img" />
                <h3>Trạng thái:{isOn}</h3>
                <div className='pump-button'>
                    <button className='button on-pump' onClick={() => controlPump(1)}>BẬT</button>
                    <button className='button off-pump' onClick={() => controlPump(0)}>TẮT</button>
                </div>

            </div>
            <div className='pump-schedule'>
                <img src={schedule} alt="img" />
                <div className='pump-schedule-button'>
                    <button className='button link-watering'>
                        <NavLink to="/watering">Tạo/Xem lịch tưới</NavLink>
                    </button>
                    {/* <button className='button link-watering'>
                        <NavLink to="/---">Lịch tưới hôm nay</NavLink>
                        
                    </button> */}
                </div>

            </div>
        </div>
    );
}
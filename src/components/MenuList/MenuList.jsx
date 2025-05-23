import './MenuList.css';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import {
    HomeOutlined, UserOutlined, SettingOutlined, WarningOutlined,
    ExclamationCircleOutlined, ClockCircleOutlined, CalendarOutlined, BarChartOutlined
} from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPumpSoap } from '@fortawesome/free-solid-svg-icons';

const menuItems = [
    { key: "/", label: <NavLink to="/">Trang chủ</NavLink>, icon: <HomeOutlined style={{ fontSize: 22 }} /> },
    { key: "/device", label: <NavLink to="/device">Thông tin thiết bị</NavLink>, icon: <ExclamationCircleOutlined style={{ fontSize: 22 }} /> },
    { key: "/watering", label: <NavLink to="/watering">Tưới cây tự động</NavLink>, icon: <CalendarOutlined style={{ fontSize: 22 }} /> },
    {
        key: "/pump", label: <NavLink to="/pump">Điều khiển máy bơm</NavLink>, icon: (
            <FontAwesomeIcon
                icon={faPumpSoap}
                style={{
                    fontSize: 23,
                    width: 23,
                    minWidth: 23,
                    display: "flex",
                    justifyContent: "center",
                }}
            />
        ),
    },
    { key: "/statistics", label: <NavLink to="/statistics">Thống kê</NavLink>, icon: <BarChartOutlined style={{ fontSize: 22 }} /> },
    // { key: "/history", label: <NavLink to="/history">Lịch sử bơm nước</NavLink>, icon: <ClockCircleOutlined style={{ fontSize: 22 }} /> },
    { key: "/thresholds", label: <NavLink to="/thresholds">Ngưỡng cho phép</NavLink>, icon: <SettingOutlined style={{ fontSize: 22 }} /> },
    { key: "/user", label: <NavLink to="/user">Thông tin cá nhân</NavLink>, icon: <UserOutlined style={{ fontSize: 22 }} /> },
    { key: "/warning", label: <NavLink to="/warning">Cảnh báo</NavLink>, icon: <WarningOutlined style={{ fontSize: 22 }} /> }
];

export default function MenuList({ collapsed }) {
    const selectedKeys = window.location.pathname;
    // const {collapsed} = props;
    return (
        <div>
            <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                extra
                inlineCollapsed={collapsed}
                items={menuItems}
                selectedKeys={[selectedKeys]}
                className={`menu-bar ${collapsed ? 'collapsed' : ''}`}
            />

        </div>
    );
}
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { MenuOutlined, FacebookFilled, CaretDownOutlined } from '@ant-design/icons';
import logo from '../../../assets/logo/logo.png';

export default function HeaderDesktop() {
  return (
    <div className="flex flex-col">
      {/* Top Bar */}
      <div className="text-gray-500 text-lg py-1 border-b border-gray-100">
        <div className="container mx-auto px-4 flex justify-end items-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
            <FacebookFilled />
            <span className="font-medium">WTY TRAN</span>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 h-24 flex items-center justify-between">
          {/* Logo */}
          <div className="max-h-24">
            <Link to="/">
              <img src={logo} alt="WTY TRAN" className="logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <div className="group relative cursor-pointer">
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-bold text-sm uppercase transition-colors flex items-center gap-1">
                GIỚI THIỆU
              </Link>
            </div>

            <Link to="/products" className="text-gray-700 hover:text-blue-600 font-bold text-sm uppercase transition-colors">
              SẢN PHẨM
            </Link>

            <Link to="/news" className="text-gray-700 hover:text-blue-600 font-bold text-sm uppercase transition-colors">
              TIN TỨC – KIẾN THỨC
            </Link>

            <a
              href="https://app.wtytran.world"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 font-bold text-sm uppercase transition-colors"
            >
              ĐĂNG KÝ / ĐĂNG NHẬP
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button type="text" icon={<MenuOutlined className="text-xl" />} />
          </div>
        </div>
      </header>
    </div>
  );
}
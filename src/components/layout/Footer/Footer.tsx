
import { FacebookFilled, InstagramFilled, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-6">WTY TRAN</h3>
                        <p className="mb-6 leading-relaxed">
                            Xưởng in DTG chuyên nghiệp, chất lượng cao. Hỗ trợ thiết kế, in tận gốc, giao nhanh, giá cạnh tranh!
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-blue-500 text-2xl transition-colors"><FacebookFilled /></a>
                            <a href="#" className="text-white hover:text-pink-500 text-2xl transition-colors"><InstagramFilled /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6">Liên kết nhanh</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-white transition-colors">Trang chủ</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Giới thiệu</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Sản phẩm</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Tin tức</a></li>
                        </ul>
                    </div>

                    {/* Service */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6">Dịch vụ</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-white transition-colors">In DTG</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Fulfillment</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Dropshipping</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Thiết kế</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6">Liên hệ</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <EnvironmentOutlined className="mr-3 text-xl mt-1 text-blue-500" />
                                <span>Hà Nội: 123 Đường ABC<br />HCM: 456 Đường XYZ</span>
                            </li>
                            <li className="flex items-center">
                                <PhoneOutlined className="mr-3 text-xl text-blue-500" />
                                <span>0901 234 567</span>
                            </li>
                            <li className="flex items-center">
                                <MailOutlined className="mr-3 text-xl text-blue-500" />
                                <span>contact@wtytran.world</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} WTY TRAN. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

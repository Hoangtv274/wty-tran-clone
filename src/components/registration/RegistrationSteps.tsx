
import { GlobalOutlined, FormOutlined, UserAddOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const steps = [
    {
        icon: <GlobalOutlined />,
        title: 'Truy Cập Website',
        desc: 'Chọn ĐĂNG KÝ ở góc trên màn hình bên phải',
    },
    {
        icon: <FormOutlined />,
        title: 'Điền Thông Tin Đăng Ký',
        desc: 'Hoàn tất thông tin đăng ký theo hướng dẫn',
    },
    {
        icon: <UserAddOutlined />,
        title: 'Active Tài Khoản',
        desc: 'Sau khi đăng ký tài khoản, Quý Khách liên hệ với Sales hoặc Admin để active tài khoản',
    },
];

export default function RegistrationSteps() {
    return (
        <section className="py-16 bg-slate-800 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">3 Bước Đăng Ký Đơn Giản</h2>
                    <p className="text-gray-300">Bắt đầu ngay hôm nay chỉ với vài thao tác</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center relative">
                            {/* Connector Line (Desktop only) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-600 -z-10 transform translate-x-1/2"></div>
                            )}

                            <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl mb-6 shadow-lg shadow-blue-500/30 ring-4 ring-blue-500/20">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-300 max-w-xs">{step.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button type="primary" size="large" shape="round" className="h-12 px-10 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 border-none hover:scale-105 transition-transform">
                        Đăng ký ngay
                    </Button>
                </div>
            </div>
        </section>
    );
}

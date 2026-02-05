
import { TagOutlined, ThunderboltOutlined, SafetyOutlined, CustomerServiceOutlined } from '@ant-design/icons';

const services = [
    {
        icon: <TagOutlined />,
        title: 'GIA TĂNG LỢI NHUẬN',
        description: 'Tận hưởng lợi ích tối đa với các sản phẩm, dịch vụ với giá cả cạnh tranh',
    },
    {
        icon: <ThunderboltOutlined />,
        title: 'high speed',
        description: 'Thời gian xử lý nhanh chóng, hệ thống hoàn toàn tự động giúp Quý Khách Hàng tiết kiệm thời gian',
    },
    {
        icon: <SafetyOutlined />,
        title: '0 phí',
        description: 'MIỄN PHÍ phí dịch vụ cho các Quý Khách Hàng trải nghiệm dịch vụ fulfillment',
    },
    {
        icon: <CustomerServiceOutlined />,
        title: 'Uy tín',
        description: 'WTY TRAN tự hào là đơn vị đưa ra các giải pháp hỗ trợ Quý Khách Hàng chuyên nghiệp và minh bạch',
    },
];

export default function ServiceFlexibility() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
                        Linh Hoạt Lựa Chọn Sản Phẩm Và Dịch Vụ - ALL IN ONE
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Nay bạn hoàn toàn có thể sử dụng toàn bộ dịch vụ với WTY TRAN nhờ hệ thống tự động nhanh chóng, vận hành đơn giản, giá cả hấp dẫn, thương hiệu uy tín.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {services.map((service, index) => (
                        <div key={index} className="flex items-start bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                            <div className="flex-shrink-0 mr-6">
                                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-3xl text-blue-600">
                                    {service.icon}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3 uppercase text-gray-800">{service.title}</h3>
                                <div className="h-0.5 w-12 bg-gray-200 mb-3"></div>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

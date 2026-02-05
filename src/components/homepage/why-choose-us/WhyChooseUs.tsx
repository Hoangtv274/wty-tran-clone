
import { CheckCircleOutlined, SafetyCertificateOutlined, ThunderboltOutlined, CoffeeOutlined } from '@ant-design/icons';

const reasons = [
    {
        icon: <CheckCircleOutlined />,
        title: 'Dễ dàng',
        desc: 'Hướng dẫn nhiệt tình, thao tác hệ thống đơn giản, dễ thực hiện',
    },
    {
        icon: <SafetyCertificateOutlined />,
        title: 'Minh bạch',
        desc: 'Thông tin về đơn hàng được thể hiện đầy đủ, chi tiết qua báo cáo',
    },
    {
        icon: <ThunderboltOutlined />,
        title: 'Nhanh chóng',
        desc: 'Đơn hàng được xử lý cực nhanh nhằm đảm bảo thời gian các đơn hàng mùa cao điểm',
    },
    {
        icon: <CoffeeOutlined />,
        title: 'Tiện lợi',
        desc: 'Hệ thống fulfill hoàn toàn tự động, chỉ cần ngồi nhận tiền từ nền tảng',
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tại Sao Chọn WTY Tran?</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="text-5xl text-blue-500 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed px-4">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

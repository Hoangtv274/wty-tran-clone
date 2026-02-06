import React from 'react';

const CompanyInfo: React.FC = () => {
    const features = [
        {
            icon: '🎨',
            title: 'In ấn theo yêu cầu, không giới hạn',
            description: 'Tự do thiết kế và tạo ra những sản phẩm độc đáo, từ áo phông, áo hoodie đến các phụ kiện thời trang.'
        },
        {
            icon: '⭐',
            title: 'Chất lượng vượt trội',
            description: 'Công nghệ in tiên tiến đảm bảo màu sắc sống động, hình ảnh sắc nét và độ bền cao cho từng sản phẩm.'
        },
        {
            icon: '🎯',
            title: 'Tùy biến linh hoạt',
            description: 'Lựa chọn đa dạng về chất liệu vải, màu sắc và kỹ thuật in để tạo nên những sản phẩm độc nhất.'
        },
        {
            icon: '💼',
            title: 'Hỗ trợ chuyên nghiệp',
            description: 'Đội ngũ tư vấn tận tâm luôn sẵn sàng hỗ trợ bạn trong suốt quá trình từ khâu thiết kế đến sản xuất.'
        },
        {
            icon: '💰',
            title: 'Tiết kiệm thời gian và chi phí',
            description: 'Quản lý đơn hàng dễ dàng, không lo hàng tồn kho, giúp bạn tập trung vào việc phát triển kinh doanh.'
        }
    ];

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Xưởng in TẬN GỐC Fantasy POD Print của WTY TRAN
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyInfo;

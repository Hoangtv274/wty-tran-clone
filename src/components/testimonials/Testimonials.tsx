
import { StarFilled } from '@ant-design/icons';
import { Avatar } from 'antd';

const reviews = [
    {
        id: 1,
        name: 'Ms Amelia',
        role: 'Seller Etsy tại Hà Nội',
        content: 'So far so good! ♥️ Cho đến nay tôi đã có một trải nghiệm tuyệt vời! Trang web dễ sử dụng và dịch vụ hoàn hảo với Etsy. Tôi rất háo hức muốn xem điều này sẽ đưa tôi đến đâu khi tôi tiếp tục xây dựng và phát triển cửa hàng của mình.',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        id: 2,
        name: 'Phillip Nguyễn',
        role: 'Seller ở TP Hồ Chí Minh',
        content: 'Comfort Colors 1717 T Shirt is good quality. Good material! Clarity of design is great.',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
        id: 3,
        name: 'Sarah Tran',
        role: 'Dropshipper',
        content: 'Dịch vụ hỗ trợ rất nhiệt tình, mình mới bắt đầu nhưng được hướng dẫn rất chi tiết. Đơn đi khá nhanh.',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-blue-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Nhiều khách hàng tin tưởng dịch vụ tại WTY TRAN</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <Avatar src={review.avatar} size={64} className="mr-4" />
                                <div>
                                    <h4 className="text-lg font-bold">{review.name}</h4>
                                    <p className="text-sm text-gray-500">{review.role}</p>
                                </div>
                            </div>
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(5)].map((_, i) => <StarFilled key={i} />)}
                            </div>
                            <p className="text-gray-600 italic">
                                "{review.content}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

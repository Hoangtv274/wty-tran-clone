
import { Button, Card } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { news } from '../../../constants';

export default function NewsSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Các Thông Tin Dịch Vụ WTY</h2>
                        <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
                    </div>
                    <Button type="link" className="text-blue-600 font-medium text-lg flex items-center hover:underline">
                        Xem thêm <ArrowRightOutlined />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {news.map((item) => (
                        <Card
                            key={item.id}
                            hoverable
                            cover={<img alt={item.title} src={item.image} className="h-64 object-cover" />}
                            className="rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
                        >
                            <div className="p-2">
                                <h3 className="text-xl font-bold mb-3 hover:text-blue-600 cursor-pointer transition-colors">{item.title}</h3>
                                <p className="text-gray-600 line-clamp-3">{item.desc}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

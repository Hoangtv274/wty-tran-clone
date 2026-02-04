
import { RocketOutlined, DollarOutlined, DropboxOutlined, ApiOutlined } from '@ant-design/icons';

const features = [
    {
        id: 1,
        icon: <RocketOutlined className="text-4xl text-blue-600" />,
        title: '~ 1-2 business day',
        description: 'Fast Production',
    },
    {
        id: 2,
        icon: <DollarOutlined className="text-4xl text-green-600" />,
        title: 'Save your money',
        description: 'Lower Base cost',
    },
    {
        id: 3,
        icon: <DropboxOutlined className="text-4xl text-purple-600" />,
        title: 'DTG Print',
        description: 'High Quality',
    },
    {
        id: 4,
        icon: <ApiOutlined className="text-4xl text-orange-600" />,
        title: 'SAVE YOUR TIME',
        description: 'WITH API',
    },
];

export default function FeatureIcons() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div key={feature.id} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="mb-4 p-4 bg-gray-100 rounded-full">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold uppercase mb-2 text-gray-800">{feature.title}</h3>
                            <p className="text-gray-600 font-medium">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

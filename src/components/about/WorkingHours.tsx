import React from 'react';

const WorkingHours: React.FC = () => {
    const workingInfo = [
        {
            icon: '🕐',
            title: 'Tư vấn và CSKH',
            value: '24/7',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: '🏭',
            title: 'US Warehouse',
            value: 'TEXAS / NEW JERSEY',
            color: 'from-purple-500 to-purple-600'
        }
    ];

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Thời Gian Làm Việc
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {workingInfo.map((info, index) => (
                        <div
                            key={index}
                            className={`bg-gradient-to-br ${info.color} rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-all duration-300`}
                        >
                            <div className="text-5xl mb-4">{info.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                            <p className="text-3xl font-bold">{info.value}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <a
                        href="https://www.facebook.com/people/Hello-n8n/61576758951910/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
                    >
                        <span className="text-3xl">📘</span>
                        <div>
                            <p className="font-semibold">Fanpage</p>
                            <p className="text-sm opacity-90">WTY TRAN</p>
                        </div>
                    </a>

                    <a
                        href="https://app.wtytran.world/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
                    >
                        <span className="text-3xl">🌐</span>
                        <div>
                            <p className="font-semibold">Fulfill Website</p>
                            <p className="text-sm opacity-90">app.wtytran.world</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WorkingHours;

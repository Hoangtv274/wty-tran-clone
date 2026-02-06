import React from 'react';

const AboutHero: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 text-white py-20 px-4 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-6xl mx-auto text-center">
                <div className="mb-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                        PHÁT TRIỂN BÙNG NỔ với WTY TRAN!
                    </h1>
                    <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                </div>

                <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
                    Bạn đang tìm kiếm một đối tác tin cậy để biến những ý tưởng sáng tạo của mình thành hiện thực?
                </p>

                <div className="mt-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        FantasyPODPrint - Đối tác xưởng in tin cậy của các nhà bán hàng trực tuyến
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;

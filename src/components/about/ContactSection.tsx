import React from 'react';

const ContactSection: React.FC = () => {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Liên Hệ
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Nếu bạn có bất kỳ câu hỏi nào hoặc cần thêm thông tin, hãy liên hệ chúng tôi
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                        <div className="text-5xl mb-4">📞</div>
                        <h3 className="text-2xl font-bold mb-4">Liên Hệ Làm Đại Lý</h3>
                        <p className="text-3xl font-bold">0943.707.363</p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                        <div className="text-5xl mb-4">✉️</div>
                        <h3 className="text-2xl font-bold mb-4">Khách Hàng Cá Nhân / Doanh Nghiệp</h3>
                        <p className="text-xl font-semibold">contact@wtytran.io</p>
                    </div>
                </div>

                {/* Additional Contact Information */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        Thông Tin Liên Hệ Khác
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-4">
                            <div className="text-3xl">🏢</div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">VP Đại Diện</h4>
                                <p className="text-gray-600">Nguyễn Khang, Trung Hòa, Cầu Giấy, Hà Nội</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="text-3xl">🏭</div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">US Warehouse</h4>
                                <p className="text-gray-600">DALLAS, TEXAS 75243</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="text-3xl">📘</div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Fanpage</h4>
                                <a
                                    href="https://www.facebook.com/profile.php?id=61576758951910"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-600 hover:text-purple-700 hover:underline"
                                >
                                    facebook.com/wty.tran
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="text-3xl">🌐</div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Website</h4>
                                <a
                                    href="https://app.wtytran.world/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-600 hover:text-purple-700 hover:underline"
                                >
                                    app.wtytran.world
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-600 mb-4">
                            Dễ dàng đăng ký và quản lý đơn hàng của bạn ngay trên điện thoại của bạn mọi lúc mọi nơi.
                        </p>
                        <a
                            href="https://app.wtytran.world/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Đăng Ký Ngay
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

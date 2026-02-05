import React from 'react';
import ProductGallery from '../../components/product/ProductGallery';
import SizeSelector from '../../components/product/SizeSelector';
import ProductSpecs from '../../components/product/ProductSpecs';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const ProductPage: React.FC = () => {
    // Product images - using placeholder images for now
    const productImages = [
        'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=800&h=800&fit=crop',
    ];

    const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'];

    const productSpecs = [
        { icon: '👕', text: 'Công nghệ in phun: DTG (Chất lượng cao, sắc nét, bền màu hơn DTF)' },
        { icon: '⏱', text: 'TG Sản Xuất Cực Nhanh: ~1.0 business days' },
        { icon: '🚛', text: 'Shipping Services: Ground (2-5 business days)/ Fast (1-2 days)' },
        { icon: '🚛', text: 'In transit Time: 1-3 business days' },
        { icon: '📣', text: 'FREE Tài khoản quản lý shop Tiktok US' },
    ];

    const handleOrder = () => {
        window.open('https://app.wtytran.world/', '_blank');
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <div className="flex-grow mx-auto px-4 sm:px-6 lg:px-20 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                        <ProductGallery images={productImages} productName="DIAMOND 2D DTG Print" />
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                DIAMOND – Sản Phẩm 2D DTG Print
                            </h1>
                            <p className="text-lg text-gray-600 mb-4">TShirt, Sweatshirt, Hoodie</p>
                            <div className="text-3xl font-bold text-purple-600">
                                0,00 $
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-300">
                            <h3 className="text-xl font-bold text-purple-900 mb-2">
                                💎 MIỄN PHÍ 1 TUẦN TRIAL DỊCH VỤ DIAMOND 💎
                            </h3>
                            <p className="text-purple-800">
                                🏭 Print in USA and Ship from DALLAS, TEXAS (US Market Only)
                            </p>
                        </div>

                        <SizeSelector sizes={sizes} onSizeSelect={() => { }} />

                        <div>
                            <button
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                onClick={handleOrder}
                            >
                                ORDER NOW
                            </button>
                        </div>

                        <div className="space-y-6 bg-white rounded-xl p-6 shadow-md">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">
                                    Vị trí in: FRONT SIDE, BACK SIDE VÀ SLEEVES
                                </h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li className="flex items-start">
                                        <span className="text-purple-600 mr-2">•</span>
                                        <span>Vùng in mặt trước và sau: Tối thiểu 4200x4800 pixel, 300 dpi / 4500x5100 pixel, 300 dpi</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-600 mr-2">•</span>
                                        <span>Vùng in cánh tay với sản phẩm T-shirt: 96.52x96.52 mm, 1140x1140 pixel</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-600 mr-2">•</span>
                                        <span>Vùng in cánh tay với sản phẩm hoodie/sweatshirt: 101.6x404.4 mm, 1200x4800 pixel</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Thông Tin Sản Xuất</h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li className="flex items-start">
                                        <span className="text-purple-600 mr-2">•</span>
                                        <span>⏱ Thời gian sản xuất: ~1-2 business day (Không tính thứ 7, chủ nhật)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-600 mr-2">•</span>
                                        <span>🚛 In transit Time: ~1-3 business days</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-600 mr-2">•</span>
                                        <span>⏱ Thời gian cut-off: 5:00 pm (GMT+7 - Giờ Việt Nam)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-600 mr-2">•</span>
                                        <span>Công nghệ in phun: DTG (Xịn hơn, chất lượng in rõ ràng, sắc nét, bền màu hơn)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-600 mr-2">•</span>
                                        <span>Thiết bị: Brother GTX pro 424</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-600 mr-2">•</span>
                                        <span>Công suất hiện tại: 50.000 đơn/ngày</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <ProductSpecs specs={productSpecs} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white shadow-xl">
                        <h3 className="text-2xl font-bold mb-4">Liên Hệ Làm Đại Lý</h3>
                        <p className="text-3xl font-bold">0943.707.363</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-8 text-white shadow-xl">
                        <h3 className="text-2xl font-bold mb-4">Khách Hàng Cá Nhân / Doanh Nghiệp</h3>
                        <p className="text-xl font-semibold">contact@wtytran.io</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductPage;

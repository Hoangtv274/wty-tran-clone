
import { Carousel, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { slides } from '../../../constants';

export default function HeroSection() {
    return (
        <section className="relative bg-gray-900 text-white overflow-hidden">
            <Carousel autoplay effect="fade" autoplaySpeed={5000}>
                {slides.map((slide) => (
                    <div key={slide.id} className="relative h-[800px] w-full">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
                        </div>

                        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center">
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-200 mb-6 animate-fade-in-up">
                                {slide.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl animate-fade-in-up delay-100">
                                {slide.subtitle}
                            </p>
                            <Button
                                type="primary"
                                size="large"
                                shape="round"
                                className="h-12 px-8 text-lg bg-blue-600 hover:bg-blue-700 border-none animate-fade-in-up delay-200"
                                icon={<RightOutlined />}
                                iconPosition="end"
                            >
                                Get Started Now
                            </Button>
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>
    );
}

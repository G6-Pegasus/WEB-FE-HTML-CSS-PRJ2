interface BannerProps {
    bannerUrl: string
}

const Banner = ({ bannerUrl } : BannerProps) => {
    return <img src={bannerUrl} alt="banner1" className="w-full h-auto pb-10" />
}

export default Banner
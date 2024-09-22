interface BannerProps {
    bannerUrl: string
}

const Banner = ({bannerUrl} : BannerProps) => {
    return <>
    <img src={bannerUrl} alt="banner1" className="w-full h-auto" />
    </>
}

export default Banner
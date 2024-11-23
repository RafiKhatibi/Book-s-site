import Navbar from "../../components/navbar/Navbar"
import Styled from "./about.module.css"
import Afmap from "./../../assets/img/Afmap.jpeg"
import Footer from "../../components/footer/Footer"
function AboutUs() {
    return (
        <>
            <Navbar title="رامش بلاگ" />

            <div className={Styled.aboutPage}>  <h2>درباره</h2>
                <p>مطالعه یکی از بهترین روش‌ها برای رشد فردی و گسترش دانش است.
                    با خواندن کتاب‌ها و مقالات مختلف، ذهن ما به چالش کشیده می‌شود و توانایی‌های فکری‌مان تقویت می‌شود. مطالعه می‌تواند به افزایش دایره واژگان، بهبود مهارت‌های نوشتاری و گفتاری کمک کند. علاوه بر این،
                    مطالعه به ما این امکان را می‌دهد که با فرهنگ‌ها و دیدگاه‌های مختلف آشنا شویم و دید وسیع‌تری نسبت به جهان پیدا کنیم.

                    یکی از فواید بزرگ مطالعه، تقویت حافظه و تمرکز است. وقتی که در حال خواندن هستیم، مجبوریم جزئیات مختلفی را به خاطر بسپاریم و این باعث تقویت مغز می‌شود. همچنین مطالعه به کاهش استرس کمک کرده و به فرد احساس آرامش و تسکین می‌دهد.

                    مطالعه همچنین می‌تواند به ما در تصمیم‌گیری‌های بهتر و
                    حل مسائل پیچیده کمک کند. زمانی که اطلاعات بیشتری داشته باشیم، قادر خواهیم بود انتخاب‌های آگاهانه‌تری داشته باشیم. در نهایت، مطالعه نه تنها یک سرگرمی مفید است، بلکه به یکی از ابزارهای اصلی برای پیشرفت فردی و اجتماعی تبدیل می‌شود.
                </p>
                <h3>فعالیت ما در تمام شهر های افغانستان است</h3>
                <img src={Afmap} alt="" />
            </div>
            <Footer />

        </>
    )
}
export default AboutUs
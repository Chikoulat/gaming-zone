import { useEffect } from "react";

function GoUp() {
  useEffect(() => {
    const handleDOMContentLoaded = () => {
      const scrollToTopButton = document.getElementById("scroll-to-top");

      const checkScroll = () => {
        if (window.scrollY > 100) {
          scrollToTopButton.style.display = "flex";
        } else {
          scrollToTopButton.style.display = "none";
        }
      };

      window.addEventListener("scroll", checkScroll);

      checkScroll();

      return () => {
        window.removeEventListener("scroll", checkScroll);
      };
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
    } else {
      handleDOMContentLoaded();
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      id="scroll-to-top"
      className="fixed bottom-4 right-4 rounded-full z-50"
      style={{ display: "none" }}
    >
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFgklEQVR4nO2ZW2wUVRjHWwqofdAQaiKhdobtzhQsqG0Jl4BRH3ywFghBJWjsQ0UCxBqjJtQS1ISCaLREEKsIJkZJDGgasVafJAQjzuy2tdpSWmovS7ei9ELpdXv7m292dvbsZHZ2Zre7ktgvOdndM+fy/8055zvnfJuUNGuzNmszYgCyAbwE4BsAFwG0AxgG4APQB+B3AF8DKAWwFsCcW0F0GoA3AHTBvlGdQwDS/wvhCwAcVd9wrOYDUAFgYaLE5wPwGgj5B8BXAF4AsBoAByAVwHx1pPIAFAI4CeAvg/o9ALbFW/w7Bh1LAJ4GkGKjnRQABQDOG7T3MYB58RBPnU4yHdEoFNhpw71oUSolgxFt1UF8T6MXD4hPVYgvaB2YlZUcWSslTtgr88IPMi+0S7w4JfMiKPm/C20SL1TLnFBa/8SWhwCcMoCY+ZEws1/S0++QeKFY4oWmgFgb6VL/T+eqdRAVMQkCMNfqUEqc8xmJF7qjEA42dVccv6mD2Bqt+LsBtAGYoEUartyvTuedMiecjlW4zKSeb79jAa5H5WIBlDONfGlU5iKXxcuc0DKT4mVeRE12DsY6PSzEMbvi7wUwyjSQbyieF7tmWrysppaiHcHep6Zos1tsB6BM5+eT2ecXMlYsiMebl3XppuwKMgwNvW9VfLI69wO2QV9G5oVKqyLcS++PfhSe36mJ8PX0jlg6AKrHAHYBhfhiKSPrWSudNzy+ESOXm5VG6JN+2wVwZS7DeA+dMPzWuf9AqRWAVxiAkwZ+PqKrbCjYjIn+GyG+kH5Tvl2I62fodO63rsNHbpzjuNsjAZxm+t0e8vZ5oTga8bFAtL26R6vfV/0jZE7cHQngD6bPXB1Akx3x9J0E6PPsQDRu3KLVpalIO3YkgG4G4B5NvCNrpan4/E2Y6OvXKk4ODCidR3omR0h1eWuD8H19/nzOmWMGwPp/bb75D2b2xdspIxstZHG5Vmfa51PyJE4sMQOgTSNg85npUx2t+Fgg3Pc9oJWfGh4J5FeZAQT9FpDGjECHlTkfaX7brfPbuke0sj6v1z8CvPin1UWcp+QlJSXLvDipb5w9r9hZnHqIsU6PpUU83NCoTiFh3Awg6HiBQsqjW5RR4wGAaNwjCzFmAtCx7y1NTO/ZKi2f9qRwABS3CdgJM4D6hx+D58Ah5dOOeDv1eyrPamI639xvCWANA0DRg7mUL3PCRDQiY0kucbniOgPWuGGzpSmUogtUKRd3utcmGqD1xZeD68RzFbJjaWARt4YFUCEoYhaw82ZuNJ5p0FWjieh67zD7rCoSQLpuP8g328jika7sKg7ZwOpWr9eeSby4xxRAhaBwX8BaKfSRsLmfuQxjHZ3BhXj8RMhziRMetAKQptvUTkUZLrGdanPXANPTfhfd24uaFXns88aI4hmIbQwAKG6TqFHwHHwXgy43mp8r0r19cZdlABWCYpWaeT/65GYi14IcKt7T4nTeZhdgnhrm04ziNhT6SDjAkqynbIlnIFL1ELT9U+gjVlHNhUXwfvAh6tc/GuHtC2eiEq8bCdYzKUbztGX7TsVzWBXtErJxZcduDNbWMe3UmNW55HY47ooJgAHZqkYrQoyiB3QBb3utRDlBkichoRRWIR9Oh7f21/cpZYzuzAMXfjYWz4lX3Q5HxoyIZyAWUrhPjZjFZFOjo7j22eeozVkV7s3PrHgdyOKJoaHyib5+2/+V0RryHj2GulXrwkwboZIigHETrwOZ01l2cG9X+ZEBCn0MN11Wro7T4+PKGx6/9rcSUSDv5Sl7G42bnoS8JCvslIna28RqFHSiuA3tllF4pAbapGz7+XiZOyMzl6IHdHKkO6zuSjpJR2KZnnFiiaWzza1gdIsKe5NK+p/avxpAxl/A76uOAAAAAElFTkSuQmCC"
        className="transition duration-300"
        alt="top"
      />
    </button>
  );
}

export default GoUp;

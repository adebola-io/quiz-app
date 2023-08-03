import { Banner, Button, Metric } from "@/components/ui";
import { useAuth, useModal } from "@/hooks";
import RpdFireBanner from "@/assets/RapidFireBanner.png";
import { CategoryList, RapidFireStart } from "@/components/fragments";
import "./Home.css";

/**
 * @protected
 * User homepage.
 */
export default function Home() {
   const { user } = useAuth();
   const modal = useModal();

   if (!user) return <></>;

   function openRapidFireStart() {
      modal.setContent(<RapidFireStart />);
      modal.morph({
         style: {
            padding: 0,
            maxHeight: "fit-content",
            minHeight: "0px",
            aspectRatio: "auto"
         }
      });
      modal.open({ closeOnClickOutside: false });
   }

   return (
      <>
         <main className="page_with_header lines min-h-screen pl-[--sidebar-width]">
            <div className="p-[3.125rem_var(--global-padding-left)_0rem_2.5rem]">
               <div className="flex mb-[2.04rem] w-full max-w-[1920px] gap-11">
                  <Metric
                     className="animate-drop-from-top effect-item-0"
                     name="quizzes played"
                     value={user.quizzesPlayed}
                     icon={<QuestionIcon />}
                  />
                  <Metric
                     className="animate-drop-from-top effect-item-2"
                     name="stars"
                     value={user.stars}
                     icon={<StarsIcon />}
                  />
                  <Metric
                     name="success rate"
                     className="animate-drop-from-top effect-item-4"
                     value={user.successRate.toFixed(1)}
                     percent
                     icon={<CheckMark />}
                  />
               </div>
               <Banner
                  className="mb-[2.04rem] animate-fade-in-from-left effect-item-2"
                  rightCornerImage={RpdFireBanner}
               >
                  <h1 className="text-[3.1215rem] mb-[0.62rem] font-avenir-next-lt-pro-bold text-green-charcoal">
                     Earn more Stars in a Rapid Fire Quiz.
                  </h1>
                  <Button
                     onClick={openRapidFireStart}
                     className="w-fit"
                     style={{
                        backgroundColor: "#ffc150",
                        color: "var(--green-charcoal)",
                        fontWeight: "bold"
                     }}
                  >
                     Get Started
                  </Button>
               </Banner>
               <CategoryList />
            </div>
         </main>
      </>
   );
}

function QuestionIcon() {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="91"
         height="91"
         viewBox="0 0 91 91"
         fill="none"
      >
         <path
            d="M44.5012 64.3931V64.3911C44.4603 64.3924 44.4188 64.3931 44.3768 64.3931H41.5608C33.4069 64.3931 26.7747 57.7669 26.7747 49.612L26.7747 41.7262C26.7747 33.5719 33.4064 26.9402 41.5608 26.9402H44.3768C52.5312 26.9402 59.1629 33.5719 59.1629 41.7263V49.6121C59.1629 52.4601 58.322 55.0912 56.9198 57.3284H65.76H66.76V58.3284V63.3931V64.3931H65.76H45.5012H44.5012ZM45.5012 8.68285C25.1058 8.68285 8.51587 25.2728 8.51587 45.6681C8.51587 66.0635 25.1058 82.6534 45.5012 82.6534C65.8965 82.6534 82.4865 66.0635 82.4865 45.6681C82.4865 25.2728 65.8965 8.68285 45.5012 8.68285ZM45.5012 89.7181C21.2106 89.7181 1.45117 69.9587 1.45117 45.6681C1.45117 21.3776 21.2106 1.61814 45.5012 1.61814C69.7917 1.61814 89.5512 21.3776 89.5512 45.6681C89.5512 69.9587 69.7917 89.7181 45.5012 89.7181ZM52.0982 41.7263C52.0982 37.4718 48.6356 34.0049 44.3768 34.0049H41.5608C37.302 34.0049 33.8394 37.4718 33.8394 41.7263L33.8394 49.6121C33.8394 53.8657 37.3012 57.3284 41.5608 57.3284H44.3768C48.6364 57.3284 52.0982 53.8658 52.0982 49.612V41.7263Z"
            fill="#2F3E46"
            stroke="#2F3E46"
            strokeWidth="2"
         />
      </svg>
   );
}

function StarsIcon() {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="96"
         height="97"
         viewBox="0 0 96 97"
         fill="none"
      >
         <path
            d="M35.7461 20.2928C41.1987 10.5113 43.9249 5.62048 48.0011 5.62048C52.0773 5.62048 54.8035 10.5112 60.2559 20.2927L61.6666 22.8233C63.2163 25.6029 63.9908 26.9928 65.1991 27.9098C66.407 28.8268 67.9111 29.1671 70.9202 29.8479L73.6597 30.4677C84.2477 32.8635 89.5422 34.0613 90.8017 38.1117C92.0613 42.162 88.4522 46.3828 81.2335 54.8236L79.3661 57.0074C77.3149 59.406 76.2891 60.6053 75.8276 62.0892C75.3666 63.573 75.5215 65.1731 75.8315 68.3737L76.1139 71.2872C77.2051 82.5493 77.751 88.1804 74.4535 90.6836C71.1556 93.1868 66.1987 90.9044 56.2848 86.3401L53.72 85.1589C50.903 83.8618 49.4944 83.2131 48.0011 83.2131C46.5078 83.2131 45.0993 83.8618 42.2822 85.1589L39.7175 86.3401C29.8035 90.9044 24.8465 93.1868 21.549 90.6836C18.2514 88.1804 18.797 82.5493 19.8884 71.2872L20.1707 68.3737C20.4809 65.1731 20.6359 63.573 20.1745 62.0892C19.7131 60.6053 18.6875 59.406 16.6362 57.0074L14.7687 54.8236C7.55028 46.3828 3.94103 42.162 5.2006 38.1117C6.46018 34.0613 11.7544 32.8635 22.3427 30.4677L25.0821 29.8479C28.0909 29.1671 29.5953 28.8268 30.8033 27.9098C32.0113 26.9928 32.786 25.603 34.3355 22.8233L35.7461 20.2928Z"
            stroke="#2F3E46"
            strokeWidth="9.59945"
         />
      </svg>
   );
}

function CheckMark() {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="119"
         height="93"
         viewBox="0 0 119 93"
         fill="none"
      >
         <path
            d="M49.1898 46.0182L90.6666 4.54086C93.8852 1.32087 99.1217 1.30474 102.341 4.52723C102.341 4.52741 102.341 4.5276 102.342 4.52778L114.224 16.4116L49.1898 46.0182ZM49.1898 46.0182L28.318 25.1464C25.1029 21.9313 19.8771 21.9388 16.6629 25.1503L16.6625 25.1507L4.77843 37.0352C4.77824 37.0354 4.77805 37.0356 4.77787 37.0358C3.22548 38.5869 2.36832 40.6581 2.36408 42.854L2.36408 42.8551C2.36143 45.0578 3.21801 47.1357 4.77332 48.691L5.8327 47.6316L4.77333 48.691L46.2021 90.1187C47.0221 90.9388 48.1243 91.2964 49.188 91.2027C49.2975 91.2127 49.4095 91.2181 49.5241 91.2181C50.4823 91.2181 51.4451 90.8512 52.1776 90.1187L114.211 28.0862C115.77 26.528 116.635 24.4518 116.638 22.2504C116.638 22.2501 116.638 22.2498 116.638 22.2495L115.138 22.2477L49.1898 46.0182ZM108.905 22.778L108.905 22.7783L49.1898 82.493L10.0801 43.3842C9.9459 43.2501 9.86971 43.073 9.86938 42.8656C9.87008 42.6621 9.94644 42.4807 10.0856 42.3409C10.0857 42.3408 10.0859 42.3406 10.0861 42.3404L21.969 30.4577L21.9696 30.4572C22.1129 30.3137 22.2995 30.2411 22.4945 30.2411C22.6869 30.2411 22.8713 30.3132 23.0112 30.4531L23.0112 30.4531L46.5366 53.9781C47.9671 55.4086 50.4128 55.4086 51.8433 53.9781L50.7827 52.9174L51.8434 53.9781L95.9716 9.84893C95.9717 9.84878 95.9719 9.84864 95.972 9.8485C96.2797 9.54245 96.7572 9.55619 97.0339 9.83318L97.0343 9.8336L108.918 21.7197L108.92 21.7212C109.059 21.8608 109.133 22.0392 109.133 22.2377C109.133 22.4379 109.057 22.6261 108.905 22.778Z"
            fill="#2F3E46"
            stroke="#2F3E46"
            strokeWidth="3"
         />
      </svg>
   );
}

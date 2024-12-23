import { Link } from "react-router";
import Image from "../../Components/Image";
import { MdNavigateNext } from "react-icons/md";
import Footer from "../../Components/Footer";
const ReadBlog = () => {
  return (
    <>
      <div className="p-4 flex  flex-col items-center">
        <div className="flex items-center  gap-2  w-full font-light">
          <Link to={"/"}>Home</Link> <MdNavigateNext /> Blog Names
        </div>
        <div className="p-4 flex items-center justify-center flex-col  w-3/4 ">
          <div className=" flex gap-8 items-center p-4">
            <span className="bg-[#F4FCD3] p-2 rounded-lg">Popular Article</span>

            <span className="font-bold tracking-wide">December 21, 2024</span>
          </div>
          <div className=" w-full">
            <h1 className="text-[3.5rem] font-bold  tracking-wide line-clamp-2 text-center p-4 ">
              This is the title for the blog that will appear here.
            </h1>
            <h1 className="text-2xl tracking-wide font-light   line-clamp-2 text-center  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              alias tenetur! Magnam enim voluptas molestiae porro corrupti,
              perspiciatis fugiat tempora reprehenderit. Possimus et, atque
              tenetur modi expedita aliquam quis aut.
            </h1>
          </div>
          <div className="w-full  h-[30rem] mt-8">
            <Image
              path={
                "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
            />
          </div>
          <div className="p-4 tracking-wide text-xl font-light">
            <p className="indent-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem quo natus similique velit mollitia ea aperiam
              cupiditate, dicta veniam cum, delectus odit consequuntur vero
              illum hic esse, ab est. Sint commodi ipsa cumque illum dolor alias
              eos at tempore amet, rem doloribus perferendis! Assumenda porro
              modi at eligendi commodi autem, officia magnam recusandae
              voluptatum eius quos optio. Adipisci quos expedita necessitatibus
              voluptatum officia quam deserunt ipsam architecto asperiores.
              Itaque, nesciunt earum molestiae aut, dolor cumque, veniam illum
              reiciendis quidem ad exercitationem ab sed deleniti. Fuga rerum
              autem quidem quasi ipsa, tempore temporibus similique
              necessitatibus nam, pariatur unde fugiat quis dolorum! <br />{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              minima ab, id officia odit unde rem, nam veritatis recusandae
              harum consectetur sequi? Saepe recusandae doloremque, architecto
              debitis nostrum tenetur facilis iste tempora minus perspiciatis
              aperiam sed dolores iusto. Omnis atque porro alias ut fugit illum
              eveniet velit. Labore, odit dolorum eligendi illum quibusdam culpa
              maiores molestiae ipsum repellendus dolorem, quis esse aut?
              Mollitia voluptas quam nesciunt nulla quod, totam possimus maiores
              suscipit sit nihil facilis minima. Excepturi quia, porro numquam
              harum tempore unde inventore omnis iusto doloremque ut velit ullam
              necessitatibus nemo perspiciatis? Laboriosam aperiam, quasi
              consequatur est obcaecati nostrum repellendus necessitatibus,
              voluptatum illo ipsam omnis nam ea sunt quaerat? Odit ipsum eos
              nulla pariatur aliquam quod, dignissimos, sed enim consequatur
              eum, quasi suscipit ratione reprehenderit voluptas ducimus
              deleniti? Iste, labore! Consequatur aliquam asperiores, impedit ab
              repellat itaque voluptatem deserunt aperiam odio quas animi beatae
              nihil officiis, reiciendis assumenda eaque? Fuga quis at rem
              officia deleniti ea molestiae voluptate aut vel repellendus magni,
              quasi provident facere mollitia eius dignissimos! Error deleniti
              ducimus aliquam sint enim quod numquam ad maiores tempore earum.
              Molestias odit, ipsam tenetur exercitationem architecto quaerat
              quod fugiat illum quae ex iusto! Sequi tempore veritatis deserunt
              nam nostrum blanditiis officia vero veniam voluptatem ex. Ipsa
              molestias sapiente impedit. Ut necessitatibus tempore aut quisquam
              rerum accusamus temporibus consequatur beatae incidunt asperiores
              excepturi, dolores fugit doloribus. Sapiente facere assumenda,
              recusandae natus aperiam adipisci quidem excepturi praesentium
              autem eveniet perferendis tempore explicabo deserunt iste
              necessitatibus nesciunt, numquam consequuntur error animi earum
              et? Numquam facilis hic reprehenderit. Recusandae, quae. Nobis ex
              ducimus accusamus officiis minima. Voluptatem, deleniti, ducimus
              atque reprehenderit, adipisci et facilis quisquam sequi asperiores
              eius deserunt temporibus harum esse sed dolorum error labore saepe
              repudiandae! Tenetur et ipsam error doloremque iure nostrum ex
              iste pariatur accusantium autem, quo fuga nobis itaque corporis
              ad, expedita illum quidem exercitationem rerum quibusdam officiis
              molestias impedit! Molestias possimus doloribus numquam error
              aliquam asperiores. Consequatur inventore cum modi iure neque
              labore minima commodi quo, quas tempore reiciendis illo officiis
              ratione perferendis, iste doloribus, recusandae minus!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReadBlog;

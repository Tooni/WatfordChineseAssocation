import { FunctionComponent } from "react";
import {Image} from "@mantine/core";
import { Article } from "../article/";
import bimeiPhoneNumber from "../../assets/bimei_phone_number.png";

export const CharitableSaleArticle: FunctionComponent = () => (
    <>
        <Article>
            <Article.Text>
                We will raise funds for the club by selling Dragon Boat Festival dumplings. The income generated, after deducting necessary expenses, will be used for the club. The traditional rice dumplings are made of sticky rice, green beans, pork, salty eggs, shiitake mushrooms, chestnut, etc.            </Article.Text>
            <Article.Text>
                The price is £5 a piece. To order, please contact Bi Mei at
                <BimeiPhoneNumber />. The Zongzi can be collected at the club on the 27th May 2025. They are available on a first-come, first-served basis, while stocks last.
            </Article.Text>
            <Article.Text>
                我們將通過出售端午節粽子為俱樂部籌集資金，收入扣除必要開支後的餘額將用於俱樂部。 傳統粽子：糯米、綠豆、豬肉、鹹蛋黄、香菇、栗子等。            </Article.Text>
            <Article.Text>
                價格為每隻5英鎊。如需訂購，請聯紫碧梅，電話：<BimeiPhoneNumber />。 粽子將於5月27日在俱樂部領取。
            </Article.Text>
            <Article.Text>
                粽子數量有限，先到先得，售完即止。
            </Article.Text>
        </Article>
    </>
);

const BimeiPhoneNumber: FunctionComponent = () => (
    <Image
        ml={4}
        display="inline"
        src={bimeiPhoneNumber}
        maw={100}
        fit="contain"
    />
);

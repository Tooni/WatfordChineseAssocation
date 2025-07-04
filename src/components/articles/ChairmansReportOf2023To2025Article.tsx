import { FunctionComponent, useState } from "react";
import { Text, Title, List, Stack, SegmentedControl, Box } from "@mantine/core";

export const ChairmansReportOf2023To2025Article: FunctionComponent = () => {
  const [language, setLanguage] = useState<"english" | "chinese">("english");

  return (
    <Stack gap="md">
      <SegmentedControl
        value={language}
        onChange={(value) => setLanguage(value as "english" | "chinese")}
        data={[
          { label: "English", value: "english" },
          { label: "中文", value: "chinese" },
        ]}
        w="fit-content"
        mb="md"
      />

      {language === "english" ? (
        <Box>
          <Title order={4} mb="sm">
            Introduction
          </Title>
          <Text>
            It is with great pleasure that I present this report, reflecting on
            the significant activities, progress, and achievements of the
            Watford Chinese Association over the past two years, from June 2023
            to June 2025. This period has been marked by renewed energy
            following the election of our new committee on 4th June 2023, and a
            dedicated effort to expand our offerings, strengthen community ties,
            and elevate our impact.
          </Text>

          <Title order={4} mt="lg" mb="sm">
            Key Achievements
          </Title>
          <Text>
            Over the past two years, the Watford Chinese Association has made
            notable footsteps in enhancing our organization and outreach:
          </Text>
          <List maw="95%" spacing="sm" mt="sm">
            <List.Item>
              Chinese New Year Culture Show 2024 & 2025: A monumental
              achievement has been the successful organization of the Chinese
              New Year Culture Show in both 2024 and 2025. Both events saw all
              600 tickets sold out, receiving excellent feedback from the
              audience. This highly popular event has become an important and
              celebrated annual fixture within the local council's cultural
              calendar, significantly raising our profile and promoting Chinese
              culture in Watford.
            </List.Item>
            <List.Item>
              Logo Design Competition: On 27th August 2023, we successfully
              organized a Logo Design Competition. This initiative not only
              engaged our community creatively but also resulted in a new,
              distinctive logo that truly represents the identity and spirit of
              the Watford Chinese Association.
            </List.Item>
            <List.Item>
              Website Launch: We have successfully launched our official
              website, providing a vital digital platform for communication,
              information sharing, and greater accessibility for our members and
              the wider community.
            </List.Item>
          </List>

          <Title order={4} mt="lg" mb="sm">
            Review of Past Activities
          </Title>
          <Text>
            Our regular Tuesday gatherings at the Watford Palace Theatre have
            been a cornerstone of our activities. These sessions offer a diverse
            range of classes, including Chinese, abacus, exercises, and dance,
            providing members with opportunities for learning and social
            interaction. Additionally, the first week of each month is dedicated
            to important community events, featuring medical talks and birthday
            parties, which help to exchange information and celebrate our
            members. We've also successfully hosted a vibrant array of cultural
            celebrations and social events:
          </Text>
          <List maw="95%" spacing="sm" mt="sm" listStyleType="lower-alpha">
            <List.Item>
              Dragon Boat Festival: This has become a beloved tradition. On 27th
              June 2023, we hosted a luncheon that attracted 60 members at a
              Chinese restaurant. On 11th June 2024, we continued this tradition
              and adopted a format of "bringing a dish to share" to encourage
              even greater community participation. Remarkably, we also
              organized a Dragon Boat Festival Fundraiser, demonstrating our
              commitment to community support and future endeavours.
            </List.Item>
            <List.Item>
              Mid-Autumn Festival: We celebrated this significant cultural event
              annually at a different Chinese restaurant.
            </List.Item>
            <List.Item>
              Christmas Celebrations: Our festive gatherings included "The Moon
              Under Water" on 19th December 2023, and another successful
              Christmas party on 17th December 2024.
            </List.Item>
            <List.Item>
              Chinese New Year Festivities: These have been a highlight of our
              calendar. We held Dim Sum lunches on 6th February 2023 and 20th
              February 2024. In 2025, we enjoyed a Chinese New Year Eve event
              featuring traditional snacks and Chinese songs on 28th January,
              followed by a Chinese New Year lunch at a Chinese restaurant on
              3rd February.
            </List.Item>
            <List.Item>
              Elderly Members' Club Anniversary Celebration: This special event
              on 5th March 2024, saw members bringing dishes to share, fostering
              a wonderful sense of friendship.
            </List.Item>
            <List.Item>
              Cultural Workshops: We enriched our members' experiences with a
              Guzheng Music mini-concert on 9th April 2024, and a Paper Cutting
              workshop on 14th January 2025, showcasing traditional Chinese
              arts.
            </List.Item>
            <List.Item>
              Royal Albert Hall Concert: A memorable outing on 21st December
              2024, allowed members to enjoy a high-profile cultural experience.
            </List.Item>
            <List.Item>
              Exciting Day and Short Trips: To broaden our horizons and provide
              opportunities for leisure and exploration, we organized:
              <List maw="95%" spacing="xs" mt={4}>
                <List.Item>
                  A day trip to Southend-on-Sea on 21st August 2023.
                </List.Item>
                <List.Item>
                  A day trip to Eastbourne on 30th July 2024.
                </List.Item>
                <List.Item>Tulleys Tulip Fields in London Colney</List.Item>
                <List.Item>
                  A short-trip to Isle of Wright, Chester & Liverpool, offering
                  a deeper dive into another vibrant UK cities.
                </List.Item>
              </List>
            </List.Item>
          </List>

          <Title order={4} mt="lg" mb="sm">
            Community Engagement and Partnerships
          </Title>
          <Text>
            Beyond our internal activities, the Watford Chinese Association has
            significantly strengthened its links with the wider local community
            and key organizations:
          </Text>
          <List maw="95%" spacing="sm" mt="sm" listStyleType="upper-alpha">
            <List.Item>
              Collaborations with Local Community Groups: We actively
              participated in the "Connected Communities" event on 5th May 2024,
              where our members showcased Chinese songs and Guzheng
              performances, sharing our culture with a broader audience. We also
              attended an event held by Watford Spiced.
            </List.Item>
            <List.Item>
              Valuable Donations: We sincerely appreciate the support received
              through donations, including furniture and food. These
              contributions demonstrate the community's trust in our mission.
            </List.Item>
            <List.Item>
              Close Relationships with Local Councils and Organizations: We have
              strong working relationships with crucial local entities,
              including:
              <List maw="95%" spacing="xs" listStyleType="lower-roman" mt={4}>
                <List.Item>
                  Watford Palace Theatre: This partnership has been instrumental
                  in providing a consistent venue for our weekly classes and
                  yearly culture show.
                </List.Item>
                <List.Item>
                  W3RT CVS (Watford & Three Rivers Trust for Voluntary Service):
                  A source of financial support.
                </List.Item>
                <List.Item>
                  Watford Borough Council: Maintaining a close relationship with
                  the local council ensures our activities align with broader
                  community goals and allows us to access important resources.
                </List.Item>
                <List.Item>
                  The Frank Soo Foundation: This partnership reflects our
                  commitment to promoting shared heritage and community values
                  especially during our annual Lunar New Year Party.
                </List.Item>
                <List.Item>
                  The Watford Football Stadium: A key provider of venue support.
                </List.Item>
                <List.Item>
                  BID (Watford Business Improvement District): Partnership for
                  high street lighting to promote Chinese New Year and our
                  Culture Show. We are looking forward to the cultural party at
                  the Watford Fringe Festival in June.
                </List.Item>
              </List>
            </List.Item>
          </List>

          <Title order={4} mt="lg" mb="sm">
            Distinguished Visitors to the Club
          </Title>
          <List maw="95%" spacing="sm">
            <List.Item>
              MP Dean Russell visited us on 1st August 2023, demonstrating
              political recognition of our work.
            </List.Item>
            <List.Item>
              Curator from Watford Museum visited on 30th April 2024, to discuss
              the Watford Museum Community Curation Panel Project, opening
              avenues for cultural preservation and display.
            </List.Item>
            <List.Item>
              Representatives from NHS Hertfordshire and West Essex engaged with
              us on 15th April 2025, regarding health inequalities, showing our
              commitment to addressing important health-related issues within
              our community.
            </List.Item>
            <List.Item>
              Members of Hertfordshire Constabulary visited on 13th May 2025,
              strengthening our relationship with local law enforcement and
              ensuring the safety and wellbeing of our members.
            </List.Item>
          </List>

          <Title order={4} mt="lg" mb="sm">
            Upcoming Projects
          </Title>
          <List maw="95%" spacing="xs" listStyleType="decimal" mb="lg">
            <List.Item>Youth club summer activities</List.Item>
            <List.Item>Day trip in July</List.Item>
            <List.Item>Mid autumn festival celebration</List.Item>
            <List.Item>Chinese Culture Show 2026, 10th anniversary</List.Item>
          </List>

          <Text>
            Finally, we would like to reveal that we have added approximately 30
            new members since the last AGM. The committee believes that we have
            achieved a very fruitful term together and are excited about the
            future. Personally, I would like to thank all committee members and
            members for their support in the last two years.
          </Text>

          <Text ta="right" mt="lg" fw={500}>
            Anita Chan
            <br />
            Chair, Watford Chinese Association
            <br />
            June 2025
          </Text>
        </Box>
      ) : (
        <Box>
          <Title order={3} mb="sm">
            引言
          </Title>
          <Text>
            我非常高興能在此提交這份報告，回顧偉福華人互助協會（Watford Chinese
            Association）
            在過去兩年（2023年6月至2025年6月）的重要活動、進展和成就。2023年6月4日新一屆委員會選舉後，協會煥發了新的活力，並致力於拓展服務、加強社區聯繫、提升影響力。
          </Text>

          <Title order={3} mt="lg" mb="sm">
            主要成就
          </Title>
          <Text>
            在過去兩年中，偉福華人互助協會（Watford Chinese
            Association）在加強自身組織和對外拓展方面取得了顯著進展：
          </Text>
          <List
            maw="95%"
            spacing="sm"
            mt="sm"
            listStyleType="trad-chinese-informal"
          >
            <List.Item>
              2024及2025年中國新年文化匯演：成功舉辦2024年和2025年中國新年文化匯演是一項巨大的成就。這兩場活動的所有600張門票均售罄，並獲得了觀眾的極佳反饋。這一廣受歡迎的活動已成為當地市政文化日程中一個重要且備受推崇的年度盛事，顯著提升了我們在偉福的形象，並推廣了中國文化。
            </List.Item>
            <List.Item>
              標誌設計大賽：2023年8月27日，我們成功舉辦了標誌設計大賽。這項活動不僅激發了會的創造力，還設計出了一個全新、獨特的標誌，真實地展現了偉福華人互助協會的身份和精神。
            </List.Item>
            <List.Item>
              網站上線：我們推出了官方網站，為會員和更廣泛的社區提供了一個重要的數位平台，用於溝通、信息共享和提升可訪問性。
            </List.Item>
          </List>

          <Title order={3} mt="lg" mb="sm">
            過往活動回顧
          </Title>
          <Text>
            我們每周二在偉福皇宮劇院（Watford Palace Theatre）
            的定期聚會一直是協會活動的重要基石。這些課程提供多元化的內容，包括普通話、珠算、健身和舞蹈，為會員提供了學習和社交互動的機會。此外，每個月的第一周的活動，包括健康講座和生日派對，這些活動有助於交流信息和慶祝會員生日。我們還舉辦了一系列豐富多彩的文化慶祝和社交節目：
          </Text>
          <List maw="95%" spacing="sm" mt="sm" listStyleType="lower-alpha">
            <List.Item>
              端午節：這已成為一項深受喜愛的傳統。2023年6月27日，我們在一家中餐館舉辦了午餐會，吸引了60名會員。2024年6月11日，我們延續了這一傳統並採用了「帶菜分享」的形式，以鼓勵更廣泛的會員參與。值得一提的是，我們還組織了端午節賣糭籌款活動，展現了我們對社區支持和未來事業的承諾。
            </List.Item>
            <List.Item>
              中秋節：我們每年都在不同的中餐館慶祝這一重要的文化節日。
            </List.Item>
            <List.Item>
              聖誕節：包括2023年12月19日的「The Moon Under
              Water」和2024年12月17日的另一場成功的聖誕派對。
            </List.Item>
            <List.Item>
              中國新年慶祝活動：這些活動一直是協會日程的亮點。我們分別於2023年2月6日和2024年2月20日舉辦了點心午餐。2025年1月28日，我們舉辦了中國除夕活動，包括傳統小吃和中文歌曲，隨後於2月3日在一家中餐館享用了中國新年午餐。
            </List.Item>
            <List.Item>
              老年會員俱樂部週年慶典：2024年3月5日的這場特別活動中，會員們帶來了各自準備的菜餚分享，營造了美好的友誼氛圍。
            </List.Item>
            <List.Item>
              文化工作坊：我們透過2024年4月9日的古箏音樂迷你音樂會和2025年1月14日的剪紙工作坊，豐富了會員的體驗，展示了中國傳統藝術。
            </List.Item>
            <List.Item>
              皇家阿爾伯特音樂廳（Royal Albert
              Hall）音樂會：2024年12月21日的一次難忘出遊，讓會員們享受了一場高水準的文化體驗。
            </List.Item>
            <List.Item>
              精彩的一日遊和短途旅行：為了拓寬視野並提供休閒和探索的機會，我們組織了：
              <List maw="95%" spacing="xs" mt={4}>
                <List.Item>
                  2023年8月21日前往濱海（Southend-on-Sea）的一日遊。
                </List.Item>
                <List.Item>2024年7月30日前往（Eastbourne）的一日遊。</List.Item>
                <List.Item>
                  London Colney 的鬱金香花田（Tulleys Tulip Fields）。
                </List.Item>
                <List.Item>
                  前往 Isle of Wight 、Chester 和 Liverpool
                  的短途旅行，深入探索了英國其他充滿活力的城市。
                </List.Item>
              </List>
            </List.Item>
          </List>

          <Title order={3} mt="lg" mb="sm">
            社區參與和合作關係
          </Title>
          <Text>
            除了內部活動，偉福華人互助協會（Watford Chinese
            Association）還顯著加強了與更廣泛的當地社區和主要組織的聯繫：
          </Text>
          <List maw="95%" spacing="sm" mt="sm" listStyleType="upper-alpha">
            <List.Item>
              與當地社區團體的合作：我們積極參與了2024年5月5日的「聯結社區」活動，會員們展示了中文歌曲和古箏表演，與更廣泛的受眾分享了我們的文化。我們還參加了偉福香料協會（Watford
              Spiced）的活動。
            </List.Item>
            <List.Item>
              寶貴捐贈：我們衷心感謝收到的包括家具和食物的捐贈。這些貢獻表明了社區對我們使命的信任。
            </List.Item>
            <List.Item>
              與地方議會和組織的密切關係：我們與重要的當地實體保持著密切的合作關係，包括：
              <List maw="95%" spacing="xs" mt={4} listStyleType="lower-roman">
                <List.Item>
                  偉福皇宮劇院（Watford Palace
                  Theatre）：這種合作關係為我們每周的課程和年度文化匯演提供了穩定的場地支持。
                </List.Item>
                <List.Item> W3RT CVS : 一個重要的財政支持來源。</List.Item>
                <List.Item>
                  偉福區議會（Watford Borough
                  Council）：與當地議會保持密切關係確保我們的活動符合更廣泛的社區目標，並使我們能夠獲取重要資源。
                </List.Item>
                <List.Item>
                  The Frank Soo
                  Foundation：這種合作反映了我們致力於推廣共同遺產和社區價值觀的承諾,
                  尤其是在我們每年的農曆新年派對期間。
                </List.Item>
                <List.Item>
                  The Watford Football Stadium：一個重要的場地支持提供者。
                </List.Item>
                <List.Item>
                  BID（偉福商業改善區）：與此機構合作，透過高街亮燈推廣中國新年和我們的文化匯演。我們期待六月份的藝穗節（Watford
                  Fringe Festival）。
                </List.Item>
              </List>
            </List.Item>
          </List>

          <Title order={3} mt="lg" mb="sm">
            俱樂部貴賓到訪
          </Title>
          <List maw="80%" spacing="sm">
            <List.Item>
              2023年8月1日，議員, MP Dean Russell
              到訪，表明了政治界對我們工作的認可。
            </List.Item>
            <List.Item>
              2024年4月30日，偉福博物館（Watford
              Museum）策展人到訪，討論偉福博物館社區策展小組項目，為文化保護和展示開闢了新途徑。
            </List.Item>
            <List.Item>
              2025年4月15日，NHS Hertfordshire and West Essex
              的代表與我們討論了健康不平等問題，展現了我們致力於解決社區內重要健康相關問題的承諾。
            </List.Item>
            <List.Item>
              2024年5月13日，赫福德郡警察（Hertfordshire
              Constabulary）的成員到訪，加強了我們與當地執法部門的關係，確保了會員的安全和福祉。
            </List.Item>
          </List>

          <Title order={3} mt="lg" mb="sm">
            即將開展的項目
          </Title>
          <List maw="95%" spacing="xs" listStyleType="decimal" mb="lg">
            <List.Item>青年俱樂部夏季活動</List.Item>
            <List.Item>七月一日遊</List.Item>
            <List.Item>中秋節慶祝活動</List.Item>
            <List.Item>2026年中國文化匯演，十週年慶典</List.Item>
          </List>

          <Text>
            最後，我們很高興地宣布，自上次年度大會以來，我們已新增了約30名會員。委員會相信我們共同度過了一個非常富有成果的任期，並對未來充滿期待。我個人要感謝所有委員會成員和會員在過去兩年中的支持。
          </Text>

          <Text ta="right" mt="lg" fw={500}>
            Anita Chan
            <br />
            偉福華人互助協會主席
            <br />
            2025年6月
          </Text>
        </Box>
      )}
    </Stack>
  );
};

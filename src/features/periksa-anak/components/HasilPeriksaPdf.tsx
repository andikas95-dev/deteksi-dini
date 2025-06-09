'use client';

import {
  ChildData,
  DetailDiagnosaData,
  DiagnosaData,
} from '@/helpers/hooks/useRiwayatPeriksa';
import {
  Link,
  Text,
  Font,
  Page,
  View,
  Image,
  Document,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    paddingBottom: 10,
    alignItems: 'stretch',
  },
  detailColumn: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  logo: {
    width: '10rem',
  },
  linkColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Lato Bold',
    color: '#32b3e7',
  },
  subtitle: {
    fontSize: 10,
    justifySelf: 'flex-end',
    fontFamily: 'Lato',
  },
  link: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  viewer: {
    width: '100%', //the pdf viewer will take up all of the width and height
    height: '100dvh',
  },
});

const Header = () => (
  <View style={headerStyles.container}>
    <View style={headerStyles.detailColumn}>
      <Image
        src="https://i.imghippo.com/files/YGzi4922pZ.png"
        style={headerStyles.logo}
      />
      {/* <Text style={headerStyles.name}>Deteksi Dini</Text> */}
      {/* <Text style={headerStyles.subtitle}>Jedi Master</Text> */}
    </View>
  </View>
);

// const

const titleStyles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 14,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
});

const Title = ({ children }: any) => (
  <Text style={titleStyles.title}>{children}</Text>
);

const listStyles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
  },
  bulletHide: {
    width: 10,
    fontSize: 10,
    color: 'white',
  },
  itemQuestion: {
    flex: 1,
    fontSize: 10,
    fontFamily: 'Lato',
  },
  itemAnswer: {
    flex: 1,
    fontSize: 10,
    fontFamily: 'Lato Bold',
  },
});

const List = ({ children }: any) => children;

type ItemProps = {
  data?: {
    question: string;
    answer: string;
  };
};

const Item = ({ data }: ItemProps) => (
  <View>
    <View style={listStyles.item}>
      <Text style={listStyles.bulletPoint}>•</Text>
      <Text style={listStyles.itemQuestion}>{data?.question}</Text>
    </View>
    <View style={listStyles.item}>
      <Text style={listStyles.bulletHide}>•</Text>
      <Text style={listStyles.itemAnswer}>{data?.answer}</Text>
    </View>
  </View>
);

const itemFlexStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
  },
  bulletHide: {
    width: 10,
    fontSize: 10,
    color: 'white',
  },
  itemQuestion: {
    flex: 1,
    fontSize: 10,
    fontFamily: 'Lato',
  },
  itemAnswer: {
    flex: 1,
    fontSize: 10,
    fontFamily: 'Lato Bold',
  },
});

const listFlexStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});

const ListFlex = ({ children }: any) => (
  <View style={listFlexStyles.container}>{children}</View>
);

const ItemFlex = ({ data }: ItemProps) => (
  <View style={itemFlexStyles.container}>
    <View style={itemFlexStyles.item}>
      <Text style={itemFlexStyles.bulletPoint}>•</Text>
      <Text style={itemFlexStyles.itemQuestion}>{data?.question}</Text>
    </View>
    <View style={itemFlexStyles.item}>
      <Text style={itemFlexStyles.bulletHide}>•</Text>
      <Text style={itemFlexStyles.itemAnswer}>{data?.answer}</Text>
    </View>
  </View>
);

const skilsStyles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 11,
    marginBottom: 10,
  },
  skills: {
    fontFamily: 'Lato',
    fontSize: 10,
    marginBottom: 10,
  },
});

// const SkillEntry = ({ name, skills }: any) => (
//   <View>
//     <Text style={skilsStyles.title}>{name}</Text>
//     <List>
//       {skills.map((skill: any, i: number) => (
//         <Item key={i}>{skill}</Item>
//       ))}
//     </List>
//   </View>
// );

// const Skills = () => (
//   <View>
//     <Title>Skills</Title>
//     <SkillEntry
//       name="Combat Abilities"
//       skills={[
//         'Completed Jedi Master training and built a lightsaber from scratch in order to do battle against the Empire',
//         'Defeated the Rancor and rescued Princess Leia from Jabba the Hutt',
//         'Competent fighter pilot as well as an excelent shot with nearly any weapon',
//       ]}
//     />
//   </View>
// );

const educationStyles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  school: {
    fontFamily: 'Lato Bold',
    fontSize: 10,
  },
  degree: {
    fontFamily: 'Lato',
    fontSize: 10,
  },
  candidate: {
    fontFamily: 'Lato Italic',
    fontSize: 10,
  },
});

const Education = () => (
  <View style={educationStyles.container}>
    <Title>Education</Title>
    <Text style={educationStyles.school}>Jedi Academy</Text>
    <Text style={educationStyles.degree}>Jedi Master</Text>
    <Text style={educationStyles.candidate}>A long, long time ago</Text>
  </View>
);

const expStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 15,
    '@media max-width: 400': {
      paddingTop: 10,
      paddingLeft: 0,
    },
  },
  entryContainer: {
    marginBottom: 10,
  },
  date: {
    fontSize: 11,
    fontFamily: 'Lato Italic',
  },
  detailContainer: {
    flexDirection: 'row',
  },
  detailLeftColumn: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
  },
  detailRightColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  bulletPoint: {
    fontSize: 10,
  },
  details: {
    fontSize: 10,
    fontFamily: 'Lato',
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  rightColumn: {
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'flex-end',
    justifySelf: 'flex-end',
  },
  title: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato Bold',
  },
});

// const ExperienceEntry = ({ company, details, position, date }: any) => {
//   const title = `${company} | ${position}`;
//   return (
//     <View style={expStyles.entryContainer}>
//       <View style={expStyles.headerContainer}>
//         <View style={expStyles.leftColumn}>
//           <Text style={expStyles.title}>{title}</Text>
//         </View>
//         <View style={expStyles.rightColumn}>
//           <Text style={expStyles.date}>{date}</Text>
//         </View>
//       </View>
//       <List>
//         {details.map((detail: any, i: number) => (
//           <Item key={i} style={expStyles.detailContainer}>
//             {detail}
//           </Item>
//         ))}
//       </List>
//     </View>
//   );
// };

const experienceData = [
  {
    company: 'Jedi Temple, Coruseant',
    date: 'A long time ago...',
    details: [
      'Started a new Jedi Temple in order to train the next generation of Jedi Masters',
      'Discovered and trained a new generation of Jedi Knights, which he recruited from within the New Republic',
      'Communicates with decesased Jedi Masters such as Anakin Skywalker, Yoda, Obi-Wan Kenobi in order to learn the secrets of the Jedi Order',
    ],
    position: 'Head Jedi Master',
  },
  {
    company: 'Rebel Alliance',
    date: 'A long time ago...',
    details: [
      'Lead legions of troops into battle while demonstrating bravery, competence and honor',
      'Created complicated battle plans in conjunction with other Rebel leaders in order to ensure the greatest chance of success',
      'Defeated Darth Vader in single-combat, and convinced him to betray his mentor, the Emperor',
    ],
    position: 'General',
  },
  {
    company: 'Rebel Alliance',
    date: 'A long time ago...',
    details: [
      'Destroyed the Death Star by using the force to find its only weakness and delivering a torpedo into the center of the ship',
      'Commanded of squadron of X-Wings into battle',
      'Defeated an enemy AT-AT single handedly after his ship was destroyed',
      'Awarded a medal for valor and bravery in battle for his successful destruction of the Death Star',
    ],
    position: 'Lieutenant Commander',
  },
  {
    company: 'Tatooine Moisture Refinery',
    date: 'A long time ago...',
    details: [
      'Replaced damaged power converters',
      'Performed menial labor thoughout the farm in order to ensure its continued operation',
    ],
    position: 'Moisture Farmer',
  },
];

// const Experience = () => (
//   <View style={expStyles.container}>
//     <Title>Experience</Title>
//     {experienceData.map(({ company, date, details, position }) => (
//       <ExperienceEntry
//         company={company}
//         date={date}
//         details={details}
//         key={company + position}
//         position={position}
//       />
//     ))}
//   </View>
// );

interface InfoPasienProps {
  nama_anak?: string | null;
  tanggal_lahir?: string | null;
  created_at?: string | null;
}

const infoPasienStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 14,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  label: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: '#112131',
    width: '7rem',
  },
  value: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: '#112131',
    textAlign: 'right',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  imageLabel: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: '#112131',
    textAlign: 'center',
    marginTop: 5,
  },
  imageValue: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: '#112131',
    textAlign: 'center',
    marginTop: 5,
  },
});

const InfoPasien = ({
  nama_anak,
  tanggal_lahir,
  created_at,
}: InfoPasienProps) => (
  <View>
    <Text style={infoPasienStyles.title}>Informasi Anak</Text>
    <View style={infoPasienStyles.container}>
      <Text style={infoPasienStyles.label}>Nama</Text>
      <Text style={infoPasienStyles.value}>{nama_anak}</Text>
    </View>
    <View style={infoPasienStyles.container}>
      <Text style={infoPasienStyles.label}>Tanggal Lahir</Text>
      <Text style={infoPasienStyles.value}>
        {tanggal_lahir ? format(tanggal_lahir, "dd MMMM yyyy", {
          locale: id
        }) : '-'}
      </Text>
    </View>
    <View style={infoPasienStyles.container}>
      <Text style={infoPasienStyles.label}>Tanggal Pemeriksaan</Text>
      <Text style={infoPasienStyles.value}>{created_at ? format(created_at, "dd MMMM yyyy", {
          locale: id
        }) : '-'}</Text>
    </View>
  </View>
);

interface DaftarPertanyaanProps {
  data?: DetailDiagnosaData[] | null;
}

const daftarPertanyaanStyles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 14,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: '#112131',
    width: '7rem',
  },
  value: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: '#112131',
    textAlign: 'right',
  },
});

const DaftarPertanyaan = ({ data }: DaftarPertanyaanProps) => {
  const questions1: DetailDiagnosaData[] = [];
  const questions2: DetailDiagnosaData[] = [];

  data?.forEach((item, idx) => {
    if (idx % 2 === 0) {
      questions1.push(item);
    } else {
      questions2.push(item);
    }
  });
  return (
    <View>
      <Text style={daftarPertanyaanStyles.title}>Daftar Pertanyaan</Text>
      <List>
        {questions1.map((item, i) => (
          <ListFlex key={`${item.nama_gejala}-${i}`}>
            <ItemFlex
              data={{
                question: item.nama_gejala ?? '',
                answer: item.jawaban ?? '',
              }}
            />
            {!!questions2?.[i] && (
              <ItemFlex
                data={{
                  question: questions2?.[i]?.nama_gejala ?? '',
                  answer: questions2?.[i]?.jawaban ?? '',
                }}
              />
            )}
          </ListFlex>
        ))}
      </List>
    </View>
  );
};

const hasilKonsultasiStyles = StyleSheet.create({
  containerStunting: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  containerNoStunting: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 10,
  },
  kesimpulan: {
    fontFamily: 'Lato',
    fontSize: 12,
    marginBottom: 10,
    color: '#fff',
  },
  hasil: {
    fontFamily: 'Lato Bold',
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff',
  },
});

interface HasilKonsultasiProps {
  stunting: boolean;
  nilai: string;
}

const HasilKonsultasi = ({
  stunting = false,
  nilai = '0',
}: HasilKonsultasiProps) => {
  return (
    <View>
      <Text style={daftarPertanyaanStyles.title}>Hasil Konsultasi</Text>
      <View
        style={
          stunting
            ? hasilKonsultasiStyles.containerStunting
            : hasilKonsultasiStyles.containerNoStunting
        }
      >
        <Text style={hasilKonsultasiStyles.kesimpulan}>
          Berdasarkan hasil perhitungan, nilai yang diperoleh adalah {nilai}.
          Dari hasil yang diperoleh maka sistem mengidentifikasi bahwa balita
          tersebut teridentifikasi:
        </Text>
        <Text style={hasilKonsultasiStyles.hasil}>
          {stunting ? 'Stunting' : 'Tidak Stunting'}
        </Text>
      </View>
    </View>
  );
};

const resumeStyles = StyleSheet.create({
  page: {
    padding: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
  },
  headerLaporan: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: "center"
  },
  image: {
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: 'column',
    width: 170,
    paddingTop: 30,
    paddingRight: 15,
    '@media max-width: 400': {
      width: '100%',
      paddingRight: 0,
    },
    '@media orientation: landscape': {
      width: 200,
    },
  },
  footer: {
    fontSize: 12,
    fontFamily: 'Lato Bold',
    textAlign: 'center',
    marginTop: 15,
    paddingTop: 5,
    borderWidth: 3,
    borderColor: 'gray',
    borderStyle: 'dashed',
    '@media orientation: landscape': {
      marginTop: 10,
    },
  },
});

Font.register({
  family: 'Open Sans',
  src: 'https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf',
});

Font.register({
  family: 'Lato',
  src: 'https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf',
});

Font.register({
  family: 'Lato Italic',
  src: 'https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf',
});

Font.register({
  family: 'Lato Bold',
  src: 'https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf',
});

// const Resume = (props: any) => (
//   <Page {...props} style={resumeStyles.page}>
//     <Header />
//     <View style={resumeStyles.headerLaporan}>
//       <Title>Laporan Pemeriksaan Stunting</Title>
//     </View>
//     <InfoPasien />
//     <DaftarPertanyaan />
//     <HasilKonsultasi stunting={false} nilai="0.55" />
//     <Text style={resumeStyles.footer}>
//       This IS the candidate you are looking for
//     </Text>
//   </Page>
// );

interface HasilPeriksaPdfProps {
  data: {
    child: ChildData | null;
    diagnosa: DiagnosaData | null;
    detailDiagnosa: DetailDiagnosaData[] | null;
  };
}

function HasilPeriksaPdf({ data }: HasilPeriksaPdfProps) {
  // const data: {
  //   child: ChildData | null;
  //   diagnosa: DiagnosaData | null;
  //   detailDiagnosa: DetailDiagnosaData[] | null;
  // } = {
  //   child: {
  //     nama_anak: 'Luke Skywalker',
  //     tanggal_lahir: '01-01-1990',
  //   },
  //   diagnosa: {
  //     created_at: '20 Januari 2025',
  //     cf_result: 0.55,
  //     cf_result_percentage: 55,
  //   },
  //   detailDiagnosa: [
  //     {
  //       nama_gejala: 'Apakah anak Anda mengalami kesulitan dalam berbicara? Apakah anak Anda mengalami kesulitan dalam berbicara? Apakah anak Anda mengalami kesulitan dalam berbicara? Apakah anak Anda mengalami kesulitan dalam berbicara?',
  //       jawaban: 'Ya',
  //       cf_combined: 0.5,
  //       cf_user: 0.5,
  //       cf_pakar: 0.5,
  //     },
  //     {
  //       nama_gejala: 'Apakah anak Anda mengalami kesulitan dalam mendengar?',
  //       jawaban: 'Tidak',
  //       cf_combined: 0.5,
  //       cf_user: 0.5,
  //       cf_pakar: 0.5,
  //     },
  //     {
  //       nama_gejala: 'Apakah anak Anda mengalami kesulitan dalam melihat?',
  //       jawaban: 'Ya',
  //       cf_combined: 0.5,
  //       cf_user: 0.5,
  //       cf_pakar: 0.5,
  //     },
  //     {
  //       nama_gejala: 'Apakah anak Anda mengalami kesulitan dalam belajar?',
  //       jawaban: 'Tidak',
  //       cf_combined: 0.5,
  //       cf_user: 0.5,
  //       cf_pakar: 0.5,
  //     },
  //     {
  //       nama_gejala: 'Apakah anak Anda mengalami kesulitan dalam berbicara?',
  //       jawaban: 'Ya',
  //       cf_combined: 0.5,
  //       cf_user: 0.5,
  //       cf_pakar: 0.5,
  //     },
  //     {
  //       nama_gejala: 'Apakah anak Anda mengalami kesulitan dalam mendengar?',
  //       jawaban: 'Tidak',
  //       cf_combined: 0.5,
  //       cf_user: 0.5,
  //       cf_pakar: 0.5,
  //     },
  //     {
  //       nama_gejala: 'Apakah anak Anda mengalami kesulitan dalam melihat?',
  //       jawaban: 'Ya',
  //       cf_combined: 0.5,
  //       cf_user: 0.5,
  //       cf_pakar: 0.5,
  //     },
  //   ],
  // };

  return (
    <Document
      author="Deteksi Dini"
      keywords="report, laporan kesehatan"
      subject="Laporan Pemeriksaan Stunting"
      title={`Laporan Pemeriksaan Stunting - ${data?.child?.nama_anak}`}
    >
      {/* <Resume size="A4" /> */}
      <Page size="A4" style={resumeStyles.page}>
        <Header />
        <View style={resumeStyles.headerLaporan}>
          <Title>Laporan Pemeriksaan Stunting</Title>
        </View>
        <InfoPasien {...data.child} created_at={data.diagnosa?.created_at} />
        <DaftarPertanyaan data={data?.detailDiagnosa} />
        <HasilKonsultasi
          stunting={Number(data?.diagnosa?.cf_result_percentage ?? 0) >= 50}
          nilai={String(data?.diagnosa?.cf_result ?? '')}
        />
        <Text style={resumeStyles.footer}>
          Created by: 202043500912 | Andika Perdana Dirgantara Sutikno
        </Text>
      </Page>
    </Document>
  );
}

export default HasilPeriksaPdf;

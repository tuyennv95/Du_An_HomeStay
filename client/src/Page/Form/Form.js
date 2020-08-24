import React, { Component } from "react";
import { makeStyles, Box, Typography, Grid } from "@material-ui/core";
import Header2 from "../../Components/Header2/Header2";
// import Header from '../../Components/Header/Header';
import Footer from "../../Components/Footer/Footer";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const useStyles = makeStyles((theme) => ({
  form_title: {
    height: "170px",
    marginTop: "80px",
    background: "rgb(246,96,56)",
    background:
      "linear-gradient(90deg, rgba(246,96,56,1) 12%, rgba(247,138,57,1) 27%, rgba(246,128,56,1) 91%)",
  },
  form_title_text: {
    fontSize: "24px",
    color: "#ffffff",
    lineHeight: "36px",
    fontWeight: 900,
    paddingTop: "50px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "20px",
      fontSize: "20px",
      lineHeight: "25px",
    },
  },
  form_title_text2: {
    fontSize: "18px",
    color: "#ffffff",
    lineHeight: "27px",
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },

  // --------------------------------------------------------------------
  form_utilities: {
    width: "95%",
    margin: "auto",
  },
  form_utilities_img: {
    width: "60px",
    height: "70px",
  },
  form_utilities_text_title: {
    color: "#222222",
    fontSize: "18px",
    lineHeight: "23px",
    fontWeight: 900,
  },
  form_utilities_text_explain: {
    color: "#555555",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 500,
  },
  form_component: {
    width: "100%",
    // height: '740px',
    // maxHeight: '1085px',
    paddingBottom: "60px",
    backgroundColor: "#FFFFFF",
    marginTop: "55px",
    borderRadius: "10px",
    marginTop: "-100px",
    border: "1px solid #d6d1d1",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-70px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "-30px",
    },
  },

  from_util_left: {
    [theme.breakpoints.down("sm")]: {
      order: 2,
    },
  },
  from_util_right: {
    paddingTop: "-10px",
    [theme.breakpoints.down("sm")]: {
      order: 1,
    },
  },
}));

export default function Form() {
  const classes = useStyles();

  return (
    <div>
      <Header2 />

      <div className={classes.form_title}>
        <Box style={{ width: "95%", margin: "auto" }}>
          <Grid container>
            <Grid item md={8} sm={12} xs={12}>
              <Typography className={classes.form_title_text}>
                Đăng ký thành viên Vietstay - Tích điểm thưởng và nhận ưu đãi
              </Typography>
              <Typography className={classes.form_title_text2}>
                Nhanh chóng, tiện lợi và an toàn. Đăng ký liền tay, rinh ngay
                quyền lợi.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Box className={classes.form_utilities}>
        <Grid container>
          <Grid item md={8} sm={12} xs={12} className={classes.from_util_left}>
            <Grid container>
              <Grid item md={6} xs={12} sm={12} style={{ marginTop: "40px" }}>
                <img
                  className={classes.form_utilities_img}
                  src="https://www.luxstay.com/account/coins@2x.png"
                ></img>
                <Typography className={classes.form_utilities_text_title}>
                  Tích điểm nhanh chóng
                </Typography>
                <Typography className={classes.form_utilities_text_explain}>
                  Tích điểm đối với mỗi lượt đặt chỗ thành công. Quy đổi thành
                  Lux Credit để du lịch nhiều hơn nữa.
                </Typography>
              </Grid>
              {/* =========================================================== */}

              <Grid item md={6} xs={12} sm={12} style={{ marginTop: "40px" }}>
                <img
                  className={classes.form_utilities_img}
                  src="https://www.luxstay.com/account/top-sales@2x.png"
                ></img>
                <Typography className={classes.form_utilities_text_title}>
                  Tiện ích thông minh{" "}
                </Typography>
                <Typography className={classes.form_utilities_text_explain}>
                  Check-in và kiểm tra hóa đơn thanh toán kể cả khi không có kết
                  nối mạng. Hoàn tiền nhanh gọn. Đổi lịch dễ dàng.
                </Typography>
              </Grid>
              {/* =========================================================== */}

              {/* ======================= */}

              <Grid item md={6} xs={12} sm={12} style={{ marginTop: "40px" }}>
                <img
                  className={classes.form_utilities_img}
                  src="https://www.luxstay.com/account/wallet@2x.png"
                ></img>
                <Typography className={classes.form_utilities_text_title}>
                  Thanh toán đơn giản
                </Typography>
                <Typography className={classes.form_utilities_text_explain}>
                  Phương thức thanh toán tiện lợi, an toàn. Tích hợp chức năng
                  lưu thẻ để đặt phòng lần sau.
                </Typography>
              </Grid>
              {/* =========================================================== */}

              <Grid item md={6} xs={12} sm={12} style={{ marginTop: "40px" }}>
                <img
                  className={classes.form_utilities_img}
                  src="https://www.luxstay.com/account/backpack@2x.png"
                ></img>
                <Typography className={classes.form_utilities_text_title}>
                  Ưu đãi mỗi ngày
                </Typography>
                <Typography className={classes.form_utilities_text_explain}>
                  Nhận thông báo ưu đãi từ Luxstay khi có kế hoạch du lịch để
                  lựa chọn và đặt ngay cho mình một chỗ ở phù hợp, tiện nghi với
                  giá tốt nhất.
                </Typography>
              </Grid>
              {/* =========================================================== */}
            </Grid>
          </Grid>
          <Grid item md={4} sm={12} xs={12} className={classes.from_util_right}>
            <Box className={classes.form_component}>
              <SignIn />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </div>
  );
}

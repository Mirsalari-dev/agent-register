import MainButton from "@/components/UI/buttons/mainButton";
import { deleteTokenFromCookie } from "@/utils/cookies/token";
import { Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";
import { userStatus } from "./api/api";

const StatusPage = () => {
  const router = useRouter();

  /// check user status request api
  const { data, isLoading } = useQuery({
    queryFn: userStatus,
    queryKey: ["userStatus"],
  });

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      borderRadius={2}
      bgcolor="white"
      paddingX={4}
      paddingY={4}
    >
      <Stack width={275} gap={2}>
        {data?.status_code === 200 ? (
          <Typography marginY={2} textAlign="center" fontSize="14px">
            درخواست شما در حال بررسی است، در صورت تایید اپلیکیشن فعال می شود
          </Typography>
        ) : (
          <Typography marginY={2} textAlign="center" fontSize="14px">
            عملیات نا موفق بود! دوباره تلاش کنید
          </Typography>
        )}
        <MainButton
          variant="contained"
          fullWidth
          size="baseMd"
          color="info"
          disabled={isLoading}
          onClick={() => {
            deleteTokenFromCookie();
            router.push("/");
          }}
        >
          ورود با حساب کاربری دیگر
        </MainButton>
      </Stack>
    </Stack>
  );
};

export default StatusPage;

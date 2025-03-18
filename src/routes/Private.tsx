import { ReactNode, useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { auth } from "../services/firebaseConnection";
import { onAuthStateChanged } from "firebase/auth";

type PrivateProps = {
  children: ReactNode;
};

export const Private = ({ children }: PrivateProps) => {
  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          uid: user?.uid,
          email: user?.email,
        };

        localStorage.setItem("@brunoLinks", JSON.stringify(userData));

        setLoading(false);
        setSigned(true);
      } else {
        setLoading(false);
        setSigned(false);
      }
    });

    return () => {
      unsub();
    };
  }, []);

  if (loading) {
    return <></>;
  }

  if (signed === false) {
    navigate("/login");
  }

  return children;
};

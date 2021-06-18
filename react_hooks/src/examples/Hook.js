import React from "react";
import { useParams } from "react-router-dom";
import { hooksMap } from "../constants/routes";

export default function Hook(props) {
  let { hookId } = useParams();
  let Hook = hooksMap().get(hookId);
  return (
    <div>
      <Hook {...props} hookId={hookId} />
    </div>
  );
}

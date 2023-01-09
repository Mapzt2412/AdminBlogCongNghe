import Inner from "./Inner";
import PropertiesService from "../../services/properties.service";
import ManageRuleService from "../../services/manageRule.service";
import { useEffect, useCallback, useState } from "react";
import FileDownload from "js-file-download";
import { getToken } from "../../libs/common";

const ManageArticles = () => {
  const [classList, setClassList] = useState();
  const [imageClassList, setImageClassList] = useState();
  const [permissionScore, setPermissionScore] = useState();

  const [statusCopyleak, setStatusCopyleak] = useState(false);
  const [loadding, setLoadding] = useState(false);

  const getImageClassList = useCallback(() => {
    ManageRuleService.getImageClass().then((data) => {
      setLoadding(false);
      setImageClassList(data.data.data);
    });
  }, []);
  const getData = useCallback((className) => {
    PropertiesService.getDataTextRule({
      className: className,
    }).then((data) => {
      FileDownload(data.data, `${className}.txt`);
    });
  }, []);
  const getClasslist = useCallback(() => {
    PropertiesService.getClasslist().then((data) => {
      setLoadding(false);
      setClassList(data.data.data);
    });
  }, []);
  const deleteClass = useCallback(
    (id) => {
      PropertiesService.deleteClass(id).then((data) => {
        setLoadding(false);
        if (data.data.message === "success") {
          getClasslist();
        }
      });
    },
    [getClasslist]
  );

  const addDataApprove = useCallback(
    (data) => {
      PropertiesService.postClassdata(data).then((data) => {
        setLoadding(false);
        if (data.data.message === "success") {
          getClasslist();
        }
      });
    },
    [getClasslist]
  );
  const disabledClass = useCallback(
    (data) => {
      PropertiesService.disabledClass(data).then((data) => {
        if (data.data.message === "success") {
          getClasslist();
        }
      });
    },
    [getClasslist]
  );
  const changeStatusImageClass = useCallback(
    (data) => {
      ManageRuleService.changeStatusImageClass(data).then((data) => {
        if (data.data.message === "success") {
          getImageClassList();
        }
      });
    },
    [getImageClassList]
  );
  const getStatusCopyleak = useCallback(() => {
    ManageRuleService.getStatusCopyleak().then((data) =>
      setStatusCopyleak(data.data.data)
    );
  }, []);

  useEffect(() => {
    ManageRuleService.changeStatusCopyleaks({ check: statusCopyleak });
  }, [statusCopyleak]);

  useEffect(() => {
    setLoadding(true);
    getClasslist();
    getImageClassList();
    getStatusCopyleak();
  }, [getClasslist, getImageClassList, getStatusCopyleak]);

  useEffect(() => {
    PropertiesService.getPermissionScore(getToken()).then((data) => {
      setPermissionScore(data.data.data);
    }, []);
  }, []);

  useEffect(() => {
    PropertiesService.updatePermissionScore(
      { permissionScore: permissionScore },
      getToken()
    );
  }, [permissionScore]);
  return (
    <Inner
      classList={classList}
      addDataApprove={addDataApprove}
      getData={getData}
      deleteClass={deleteClass}
      disabledClass={disabledClass}
      imageClassList={imageClassList}
      changeStatusImageClass={changeStatusImageClass}
      statusCopyleak={statusCopyleak}
      setStatusCopyleak={setStatusCopyleak}
      loadding={loadding}
      permissionScore={permissionScore}
      setPermissionScore={setPermissionScore}
    />
  );
};
export default ManageArticles;

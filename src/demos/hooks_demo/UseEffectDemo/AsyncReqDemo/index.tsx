import React, { useEffect, useState } from "react";

// simulate a api
async function getPersonList() {
  await new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  return ["aa", "bb", "cc"];
}

// there is no need to assign type for usePerson
const usePerson = () => {
  // must use Array<string> instead of [string]
  const [person, setPerson] = useState<Array<string>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let unmounted = false;// 可以考虑加上 AbortController一起控制, 可以在组件 UNmount 后打断请求后端

    (async () => {
      setLoading(true);
      let person = await getPersonList();
      // 若组件没有卸载才 set state
      // // 防止组件被销毁后, 我们还在 set state
     if (!unmounted) {
      setPerson(person);
      setLoading(false);
     }
    })();

    return () => {// 组件被卸载前调用
      unmounted = true;
    };
  }, []);

  return { person, loading };
};

const AsyncReqDemo: React.FC = () => {
  const { person, loading } = usePerson();
  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
        person.map((name) => <li key={name}>{name}</li>)
      )}
    </>
  );
};

export default AsyncReqDemo;

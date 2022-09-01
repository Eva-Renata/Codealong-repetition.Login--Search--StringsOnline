import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Scss/NavBarLeft.module.scss";

export const NavBarLeft = () => {
  const [parentgroups, setParentgroups] = useState([]);
  const [subGroups, setSubGroups] = useState([]);
  const [curId, setCurId] = useState(0);

  useEffect(() => {
    //getting parent groups
    const getData = async () => {
      const result = await axios.get(
        "https://api.mediehuset.net/stringsonline/groups"
      );
      //console.log(result);
      setParentgroups(result.data.items);
    };
    getData();
  }, [setParentgroups]);

  //getting sub groups
  const getSubmenu = async (group_id) => {
    const result = await axios.get(
      `https://api.mediehuset.net/stringsonline/groups/${group_id}`
    );
    //id, som var clicket
    setCurId(group_id);
    //console.log(result);
    setSubGroups(result.data.items.subgroups);
  };

  return (
    <section className={styles.NLwrapper}>
      <h2>Navbar left codealong with Heinz</h2>
      <ul>
        {/* mapping parent groups, and Link has onClick function - which opens subgroups*/}
        {parentgroups &&
          parentgroups.map((group) => {
            return (
              <li key={group.id}>
                <Link
                  to={"/products"}
                  onClick={() => {
                    getSubmenu(group.id);
                  }}
                  className={styles.Gwrapper}
                >
                  {group.title}
                </Link>
                {/* vi skal vide, hvilken id har været clicket med curId */}
                {group.id === curId && (
                  <ul>
                    {/* mapping subgroups */}
                    {subGroups &&
                      subGroups.map((subgroup) => {
                        return (
                          <li key={subgroup.id}>
                            <Link
                              to={`/products/${subgroup.id}`}
                              className={styles.SGwrapper}
                            >
                              {subgroup.title}
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                )}
              </li>
            );
          })}
      </ul>
    </section>
  );
};

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { UserDto } from "@/application/dtos/core/users/UserDto";
import ClientsUsage from "@/components/app/usages/ClientsUsage";
import EmployeesUsage from "@/components/app/usages/EmployeesUsage";
import ProvidersUsage from "@/components/app/usages/ProvidersUsage";
import MySubscriptionProducts from "@/components/core/settings/subscription/MySubscriptionProducts";
import { RootState } from "@/store";
import UserUtils from "@/utils/store/UserUtils";
import { useSelector } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Dashboard() {
  const { t } = useTranslation();

  const currentUser = useSelector((state: RootState): UserDto => {
    return state.account.user ?? ({} as UserDto);
  });
  const avatarText = useSelector(() => {
    return UserUtils.avatarText(currentUser);
  });
  const avatar = useSelector((state: RootState) => {
    return state.account.user?.avatar ?? "";
  });

  return (
    <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
      <HelmetProvider>
        <Helmet>
          <title>{t("app.sidebar.dashboard")} | React SaasFrontend</title>
        </Helmet>
      </HelmetProvider>
      {/*Page header */}
      <div className="hidden md:block bg-white shadow lg:border-t lg:border-gray-200">
        <div className="px-4 sm:px-8 max-w-5xl mx-auto">
          <div className="py-2 md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              {/*Profile */}
              <div className="flex items-center">
                <Link to="/app/settings/profile">{avatar && <img className="hidden h-12 w-12 rounded-full sm:block" src={avatar} alt="Profile" />}</Link>
                <div>
                  <div className="flex items-center">
                    <div>
                      {(() => {
                        if (avatar) {
                          return <img className="h-12 w-12 rounded-sm sm:hidden" src={avatar} alt="Avatar" />;
                        } else {
                          return (
                            <span className="sm:hidden inline-flex items-center justify-center h-12 w-12 rounded-sm bg-slate-800 shadow-xl">
                              <span className="text-sm font-medium leading-none text-white">{avatarText}</span>
                            </span>
                          );
                        }
                      })()}
                    </div>
                    <h1 className="ml-3 text-lg font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                      {t("shared.hi")} {currentUser.firstName && <span>{currentUser.firstName} 👋!</span>}
                    </h1>
                  </div>
                  <dl className="flex flex-col sm:ml-3 sm:flex-row sm:flex-wrap">
                    <dt className="sr-only">{t("models.user.email")}</dt>
                    <dd className="flex items-center text-xs text-gray-500 font-medium lowercase sm:mr-6">
                      {/*Heroicon name: office-building */}
                      <svg
                        className="flex-shrink-0 mr-0.5 h-3.5 w-3.5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {currentUser.email}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-8 max-w-5xl mx-auto py-5 grid gap-5">
        <div className="mt-2 grid sm:grid-cols-1 gap-5">
          <div className="space-y-5">
            <MySubscriptionProducts withCurrentPlan={true} cols="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-4" />
            <div>
              <div>
                <div className="flex items-center space-x-2 justify-between">
                  <h3 className="leading-5 text-gray-900">{t("app.dashboard.summary")}</h3>
                </div>

                <dl className="mt-2 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-4">
                  <ProvidersUsage />
                  <ClientsUsage />
                  <EmployeesUsage />
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

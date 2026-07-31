'use client';

import React, { useState } from 'react';
import { SettingsNav } from '@/components/teacher-dashboard/settings/settings-nav';
import { AccountSettings } from '@/components/teacher-dashboard/settings/account-settings';
import { PrivacySettings } from '@/components/teacher-dashboard/settings/privacy-settings';
import { NotificationSettings } from '@/components/teacher-dashboard/settings/notification-settings';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('account');

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your preferences and account</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <SettingsNav activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
        <div className="lg:col-span-3">
          {activeTab === 'account' && <AccountSettings />}
          {activeTab === 'privacy' && <PrivacySettings />}
          {activeTab === 'notifications' && <NotificationSettings />}
        </div>
      </div>
    </div>
  );
}
